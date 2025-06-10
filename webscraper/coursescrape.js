import puppeteer from "puppeteer"
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getTranscript = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1", {
    waitUntil: "domcontentloaded",
  });

  // ... (keeping all the existing scraping logic) ...
  
  // Wait for the library-course-description div to load
  await page.waitForSelector('#library-course-description', { timeout: 10000 });

  // Get all video links
  const videoLinks = await page.evaluate(() => {
    const descriptionDiv = document.getElementById('library-course-description');
    const links = descriptionDiv.querySelectorAll('a[href^="/video/"]');
    
    return Array.from(links).map(link => ({
      href: link.getAttribute('href'),
      text: link.textContent.trim(),
      fullUrl: link.href
    }));
  });

  console.log(`Found ${videoLinks.length} video links`);
  
  const allTranscripts = [];

  // Process each video (keeping existing logic)
  for (let i = 0; i < videoLinks.length; i++) {
    console.log(`\n--- Processing video ${i + 1} of ${videoLinks.length} ---`);
    console.log(`Title: ${videoLinks[i].text}`);

    try {
      const linkSelector = `#library-course-description a[href="${videoLinks[i].href}"]`;
      await page.waitForSelector(linkSelector);
      
      await Promise.all([
        page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        page.click(linkSelector)
      ]);

      await page.waitForSelector('div.transcript-content', { timeout: 15000 });
      await page.waitForSelector('p.transcript-text', { timeout: 10000 });
     

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

      await page.goBack({ waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#library-course-description', { timeout: 10000 });
      

    } catch (error) {
      console.error(`Error processing video ${i + 1}:`, error.message);
      allTranscripts.push({
        videoIndex: i + 1,
        videoTitle: videoLinks[i].text,
        error: error.message
      });
      
      try {
        await page.goto("https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1", {
          waitUntil: "domcontentloaded",
        });
        await page.waitForSelector('#library-course-description');
      } catch (navError) {
        console.error('Navigation recovery failed:', navError.message);
      }
    }
  }

  // Create Docusaurus-compatible markdown content
  let docusaurusMarkdown = `---
sidebar_position: 7
---

# Ignition Video Transcripts

This page contains transcripts from the Ignition Overview video course.

## Overview

These transcripts are automatically generated from the [Ignition Overview Course](https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1) on Inductive University.

:::info
Generated on: ${new Date().toLocaleString()}
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

  // SAVE TO DOCS/TUTORIAL-BASICS FOLDER
  // Try multiple paths to find the docs folder
  const possiblePaths = [
    // If running from webscraper folder
    path.join(__dirname, '..', 'docs', 'tutorial-basics', 'ignition-transcripts.md'),
    // If running from project root
    path.join(process.cwd(), 'docs', 'tutorial-basics', 'ignition-transcripts.md'),
    // If running from my-website folder
    path.join(__dirname, '..', '..', 'docs', 'tutorial-basics', 'ignition-transcripts.md'),
  ];

  let saved = false;
  for (const targetPath of possiblePaths) {
    try {
      // Check if the directory exists
      const dirPath = path.dirname(targetPath);
      await fs.access(dirPath);
      
      // Save the file
      await fs.writeFile(targetPath, docusaurusMarkdown);
      console.log(`\n✅ Successfully saved to: ${targetPath}`);
      saved = true;
      break;
    } catch (error) {
      console.log(`Could not save to ${targetPath}: ${error.message}`);
    }
  }

  if (!saved) {
    // If all paths fail, save to current directory and show instructions
    const fallbackPath = 'ignition-transcripts.md';
    await fs.writeFile(fallbackPath, docusaurusMarkdown);
    console.log(`\n⚠️ Could not find docs/tutorial-basics folder.`);
    console.log(`✅ File saved to current directory: ${fallbackPath}`);
    console.log(`\n📁 Please manually move this file to: docs/tutorial-basics/`);
    console.log(`   Your file structure should look like:`);
    console.log(`   my-website/`);
    console.log(`   ├── docs/`);
    console.log(`   │   └── tutorial-basics/`);
    console.log(`   │       └── ignition-transcripts.md`);
    console.log(`   └── webscraper/`);
    console.log(`       └── coursescrape.js`);
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
};

// Start the scraper
getTranscript();