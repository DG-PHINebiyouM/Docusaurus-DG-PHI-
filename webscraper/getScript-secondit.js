import puppeteer from "puppeteer"
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


//Useful Script gets each transcript from each subcategory and organizes it under said subcategory and turns it into markdown file
// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper functions for human-like behavior
function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

// Custom delay function to replace waitForTimeout
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function humanLikeInteraction(page) {
  // Random scroll
  await page.evaluate(() => {
    const scrollAmount = Math.random() * 300 + 100;
    window.scrollBy(0, scrollAmount);
  });
  
  // Random mouse movement
  await page.mouse.move(
    Math.random() * 800 + 100,
    Math.random() * 600 + 100
  );
  
  // Small random delay
  await delay(randomDelay(1, 3));
}

async function randomScroll(page) {
  await page.evaluate(() => {
    const maxScroll = document.body.scrollHeight;
    const randomPosition = Math.random() * maxScroll * 0.5;
    window.scrollTo({
      top: randomPosition,
      behavior: 'smooth'
    });
  });
}

export const getTranscript = async (courseUrl) => {
  // Validate URL parameter
  if (!courseUrl) {
    throw new Error('Course URL is required');
  }
  
  if (!courseUrl.includes('inductiveuniversity.com')) {
    throw new Error('URL must be from inductiveuniversity.com');
  }

  console.log(`\n🔗 Processing course: ${courseUrl}\n`);

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
    ]
  });

  const page = await browser.newPage();
  
  // Remove automation indicators
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });
  
  // Set realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // Navigate to course page
  await page.goto(courseUrl, {
    waitUntil: "domcontentloaded",
  });

  // Human-like behavior after page load
  await delay(randomDelay(2, 4));
  await humanLikeInteraction(page);

  // Wait for the library-course-description div to load
  await page.waitForSelector('#library-course-description', { timeout: 10000 });
  
  // Scroll and wait before getting video links
  await randomScroll(page);
  await delay(randomDelay(1, 2));

  // Extract course name from URL for file naming
  const courseName = courseUrl.split('/').slice(-2, -1)[0] || 'course';

  // Get all video links with better error handling
  const videoLinks = await page.evaluate(() => {
    const descriptionDiv = document.getElementById('library-course-description');
    if (!descriptionDiv) {
      console.error('library-course-description div not found');
      return [];
    }
    
    const links = descriptionDiv.querySelectorAll('a[href^="/video/"]');
    console.log(`Found ${links.length} video links in the page`);
    
    return Array.from(links).map((link, index) => ({
      href: link.getAttribute('href'),
      text: link.textContent.trim(),
      fullUrl: link.href,
      index: index
    }));
  });

  console.log(`Found ${videoLinks.length} video links`);
  
  // Debug: Show what links were found
  if (videoLinks.length === 0) {
    console.error('❌ No video links found! Check the page structure.');
    await browser.close();
    return [];
  } else {
    console.log('Video links found:');
    videoLinks.forEach((link, i) => {
      console.log(`  ${i + 1}. ${link.text} - ${link.href}`);
    });
  }
  
  const allTranscripts = [];

  // Process each video
  for (let i = 0; i < videoLinks.length; i++) {
    console.log(`\n--- Processing video ${i + 1} of ${videoLinks.length} ---`);
    console.log(`Title: ${videoLinks[i].text}`);
    console.log(`Href: ${videoLinks[i].href}`);

    // Random delay between videos
    if (i > 0) {
      const videoDelay = randomDelay(3, 7);
      console.log(`⏱️  Waiting ${videoDelay/1000} seconds before next video...`);
      await delay(videoDelay);
    }

    try {
      // Try to find and click the link
      console.log('Looking for video link to click...');
      
      // Method 1: Try clicking using evaluate (most reliable)
      const clicked = await page.evaluate((videoHref) => {
        const link = document.querySelector(`a[href="${videoHref}"]`);
        if (link) {
          console.log('Found link element:', link);
          link.scrollIntoView({ behavior: 'smooth', block: 'center' });
          link.click();
          return true;
        }
        return false;
      }, videoLinks[i].href);

      if (!clicked) {
        throw new Error('Could not find link element to click');
      }

      console.log('Clicked! Waiting for navigation...');
      
      // Wait for navigation
      try {
        await page.waitForNavigation({ 
          waitUntil: 'domcontentloaded', 
          timeout: 30000 
        });
      } catch (navError) {
        console.log('Navigation wait timed out, checking if page changed anyway...');
        const currentUrl = page.url();
        if (currentUrl === courseUrl) {
          throw new Error('Navigation failed - still on same page');
        }
      }

      // Verify we navigated
      const currentUrl = page.url();
      console.log('Successfully navigated to:', currentUrl);

      // Wait and interact after video page loads
      await delay(randomDelay(2, 4));
      await humanLikeInteraction(page);

      // Wait for transcript content
      console.log('Looking for transcript content...');
      await page.waitForSelector('div.transcript-content', { timeout: 15000 });
      await page.waitForSelector('p.transcript-text', { timeout: 10000 });
      
      // Scroll through transcript naturally
      await page.evaluate(() => {
        const transcriptDiv = document.querySelector('div.transcript-content');
        if (transcriptDiv) {
          transcriptDiv.scrollTop = transcriptDiv.scrollHeight * 0.3;
        }
      });
      await delay(randomDelay(1, 2));
     
      // Extract transcript data
      const transcriptData = await page.evaluate(() => {
        const transcriptContent = document.querySelector('div.transcript-content');
        
        if (!transcriptContent) {
          return { error: 'No transcript content div found' };
        }

        const transcriptParagraphs = transcriptContent.querySelectorAll('p.transcript-text');
        
        const transcriptTexts = Array.from(transcriptParagraphs).map(p => ({
          time: p.getAttribute('data-transcription-time') || 'N/A',
          text: p.textContent.trim()
        }));

        const fullTranscript = transcriptTexts.map(t => t.text).join(' ');

        return {
          videoTitle: document.title,
          videoUrl: window.location.href,
          transcriptCount: transcriptTexts.length,
          transcriptParagraphs: transcriptTexts,
          fullTranscript: fullTranscript
        };
      });

      allTranscripts.push({
        videoIndex: i + 1,
        videoTitle: videoLinks[i].text,
        ...transcriptData
      });

      console.log(`✅ Extracted ${transcriptData.transcriptCount} transcript paragraphs`);

      // Human-like delay before going back
      await delay(randomDelay(1, 3));
      await humanLikeInteraction(page);

      // Go back to course page
      console.log('Navigating back to course page...');
      await page.goBack({ waitUntil: 'domcontentloaded' });
      
      // Wait after going back
      await delay(randomDelay(2, 4));
      await page.waitForSelector('#library-course-description', { timeout: 10000 });
      console.log('✅ Back on course page');
      
    } catch (error) {
      console.error(`❌ Error processing video ${i + 1}:`, error.message);
      console.error('Full error details:', error);
      
      allTranscripts.push({
        videoIndex: i + 1,
        videoTitle: videoLinks[i].text,
        error: error.message
      });
      
      // Try to recover by going back to course page
      try {
        console.log('Attempting to recover by navigating back to course page...');
        await page.goto(courseUrl, {
          waitUntil: "domcontentloaded",
        });
        await page.waitForSelector('#library-course-description');
        console.log('✅ Recovery successful');
        
        // Wait after error recovery
        await delay(randomDelay(3, 5));
        
      } catch (navError) {
        console.error('❌ Navigation recovery failed:', navError.message);
        break; // Stop processing if we can't recover
      }
    }
    
    // Longer delay every few videos
    if ((i + 1) % 3 === 0 && i < videoLinks.length - 1) {
      const longDelay = randomDelay(10, 20);
      console.log(`😴 Taking a ${longDelay/1000} second break after ${i + 1} videos...`);
      await delay(longDelay);
    }
  }

  // Create Docusaurus-compatible markdown content
  let docusaurusMarkdown = `---
sidebar_position: 7
---

# ${courseName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Video Transcripts

This page contains transcripts from the ${courseName} video course.

## Overview

These transcripts are automatically generated from the [${courseName} Course](${courseUrl}) on Inductive University.

:::info
Generated on: ${new Date().toLocaleString()}
Source URL: ${courseUrl}
:::

## Video Transcripts

`;

  // Add each video transcript
  allTranscripts.forEach((video, index) => {
    if (!video.error) {
      docusaurusMarkdown += `### ${index + 1}. ${video.videoTitle}\n\n`;
      docusaurusMarkdown += `:::tip Video Link\n`;
      docusaurusMarkdown += `Watch the video: [${video.videoTitle}](${video.videoUrl})\n`;
      docusaurusMarkdown += `:::\n\n`;
      docusaurusMarkdown += `<details>\n`;
      docusaurusMarkdown += `<summary>View Transcript (${video.transcriptCount} paragraphs)</summary>\n\n`;
      
      video.transcriptParagraphs.forEach(para => {
        docusaurusMarkdown += `**${para.time}** ${para.text}\n\n`;
      });
      
      docusaurusMarkdown += `</details>\n\n`;
      docusaurusMarkdown += `---\n\n`;
    } else {
      docusaurusMarkdown += `### ${index + 1}. ${video.videoTitle}\n\n`;
      docusaurusMarkdown += `:::danger Error\n`;
      docusaurusMarkdown += `Failed to retrieve transcript: ${video.error}\n`;
      docusaurusMarkdown += `:::\n\n`;
      docusaurusMarkdown += `---\n\n`;
    }
  });

  docusaurusMarkdown += `## Additional Resources\n\n`;
  docusaurusMarkdown += `- [Inductive University](https://inductiveuniversity.com/)\n`;
  docusaurusMarkdown += `- [Ignition Documentation](https://docs.inductiveautomation.com/)\n`;
  docusaurusMarkdown += `- [Ignition Downloads](https://inductiveautomation.com/downloads/)\n`;

  // Use course name in filename
  const filename = `${courseName}-transcripts.md`;
  
  // SAVE TO DOCS/TUTORIAL-BASICS FOLDER
  const possiblePaths = [
    path.join(__dirname, '..', 'docs', 'tutorial-basics', filename),
    path.join(process.cwd(), 'docs', 'tutorial-basics', filename),
    path.join(__dirname, '..', '..', 'docs', 'tutorial-basics', filename),
  ];

  let saved = false;
  for (const targetPath of possiblePaths) {
    try {
      const dirPath = path.dirname(targetPath);
      await fs.access(dirPath);
      
      await fs.writeFile(targetPath, docusaurusMarkdown);
      console.log(`\n✅ Successfully saved to: ${targetPath}`);
      saved = true;
      break;
    } catch (error) {
      console.log(`Could not save to ${targetPath}: ${error.message}`);
    }
  }

  if (!saved) {
    const fallbackPath = filename;
    await fs.writeFile(fallbackPath, docusaurusMarkdown);
    console.log(`\n⚠️ Could not find docs/tutorial-basics folder.`);
    console.log(`✅ File saved to current directory: ${fallbackPath}`);
  }

  console.log('\n--- Summary ---');
  allTranscripts.forEach(video => {
    if (video.error) {
      console.log(`❌ Video ${video.videoIndex}: ${video.videoTitle} - ERROR: ${video.error}`);
    } else {
      console.log(`✅ Video ${video.videoIndex}: ${video.videoTitle} - ${video.transcriptCount} paragraphs`);
    }
  });

  await browser.close();
  
  // Return the transcripts data
  return allTranscripts;
};