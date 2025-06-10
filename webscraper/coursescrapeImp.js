import puppeteer from "puppeteer"
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createFileName = (title) => {
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  return `${cleanTitle}.md`;
};

const getCourseStructure = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('#course-list', { timeout: 10000 });

  // First, let's debug the structure
  const htmlStructure = await page.evaluate(() => {
    const courseList = document.getElementById('course-list');
    return courseList.innerHTML;
  });
  
  console.log('HTML Structure:', htmlStructure.substring(0, 1000) + '...');

  // Get the proper course structure based on the actual HTML
  const courseCategories = await page.evaluate(() => {
    const courseList = document.getElementById('course-list');
    const categories = [];
    
    // Look for all anchor tags with specific patterns
    const allLinks = courseList.querySelectorAll('a');
    const linkStructure = {};
    
    // Build a structure based on the text content and hierarchy
    const mainCategories = [
      'Getting Started',
      'Ignition Gateway Setup', 
      'Launching Ignition',
      'Tags',
      'Visualization',
      'Platform',
      'Historical Data',
      'Enterprise',
      "What's New?"
    ];
    
    // Initialize categories
    mainCategories.forEach(catName => {
      linkStructure[catName] = {
        name: catName,
        subcategories: []
      };
    });
    
    // Go through all links and categorize them
    allLinks.forEach(link => {
      const text = link.textContent.trim();
      const href = link.getAttribute('href');
      
      // Check which main category this belongs to
      if (text === 'Ignition Overview' || text === 'Ignition Editions') {
        linkStructure['Getting Started'].subcategories.push({ name: text, href });
      } else if (text === 'Ignition Gateway' || text === 'OPC UA and Devices in Ignition' || text === 'Databases in Ignition') {
        linkStructure['Ignition Gateway Setup'].subcategories.push({ name: text, href });
      } else if (text === 'Ignition Designer' || text === 'Clients and Sessions') {
        linkStructure['Launching Ignition'].subcategories.push({ name: text, href });
      } else if (text === 'Tags in Ignition' || text === 'Tag Historian in Ignition' || text === 'Alarming in Ignition') {
        linkStructure['Tags'].subcategories.push({ name: text, href });
      } else if (text.includes('Vision') || text.includes('Perspective')) {
        linkStructure['Visualization'].subcategories.push({ name: text, href });
      } else if (text === 'Scripting in Ignition' || text === 'SQL in Ignition' || text === 'Security in Ignition' || text === 'Localization in Ignition') {
        linkStructure['Platform'].subcategories.push({ name: text, href });
      } else if (text === 'Transaction Groups in Ignition' || text === 'Reporting in Ignition') {
        linkStructure['Historical Data'].subcategories.push({ name: text, href });
      } else if (text === 'Enterprise Administration Module' || text === 'Logic Charts' || text.includes('Sequential Function Charts')) {
        linkStructure['Enterprise'].subcategories.push({ name: text, href });
      } else if (text.includes("What's New")) {
        linkStructure["What's New?"].subcategories.push({ name: text, href });
      }
    });
    
    // Convert to array
    Object.values(linkStructure).forEach((category, index) => {
      if (category.subcategories.length > 0) {
        categories.push({
          name: category.name,
          index: index,
          subcategories: category.subcategories
        });
      }
    });
    
    return categories;
  });

  console.log('Found course structure:');
  courseCategories.forEach(cat => {
    console.log(`\n${cat.name}:`);
    cat.subcategories.forEach(sub => {
      console.log(`  - ${sub.name}`);
    });
  });

  // Process each main category
  for (const category of courseCategories) {
    console.log(`\n--- Creating file for: ${category.name} ---`);
    
    let categoryMarkdown = `---
sidebar_position: ${category.index + 1}
---

# ${category.name}

## Overview

This section contains the following courses:

`;

    // List subcategories
    category.subcategories.forEach((subcategory, index) => {
      categoryMarkdown += `${index + 1}. ${subcategory.name}\n`;
    });
    
    categoryMarkdown += `\n## Course Details\n\n`;
    
    // Click on each subcategory to get details
    for (const subcategory of category.subcategories) {
      try {
        console.log(`  Getting details for: ${subcategory.name}`);
        
        // Find and click the link by href
        const linkSelector = `#course-list a[href="${subcategory.href}"]`;
        
        await page.waitForSelector(linkSelector, { timeout: 5000 });
        
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
          page.click(linkSelector)
        ]);
        
        console.log(`    ✅ Navigated to ${subcategory.name}`);
        
        // Get info from the page
        const pageInfo = await page.evaluate(() => {
          return {
            title: document.title,
            url: window.location.href,
            description: document.querySelector('meta[name="description"]')?.content || 'No description available'
          };
        });
        
        categoryMarkdown += `### ${subcategory.name}\n\n`;
        categoryMarkdown += `- **URL**: [${pageInfo.url}](${pageInfo.url})\n`;
        categoryMarkdown += `- **Description**: ${pageInfo.description}\n\n`;
        
        // Navigate back
        await page.goBack({ waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#course-list', { timeout: 10000 });
        
      } catch (error) {
        console.error(`    Error getting details for ${subcategory.name}:`, error.message);
        categoryMarkdown += `### ${subcategory.name}\n\n`;
        categoryMarkdown += `⚠️ Could not retrieve details for this course.\n\n`;
      }
    }

    categoryMarkdown += `\n---\n\n`;
    categoryMarkdown += `*Generated: ${new Date().toLocaleString()}*\n`;

    // Save the file
    const fileName = createFileName(category.name);
    const possiblePaths = [
      path.join(__dirname, '..', 'docs', 'tutorial-basics', fileName),
      path.join(process.cwd(), 'docs', 'tutorial-basics', fileName),
      path.join(__dirname, '..', '..', 'docs', 'tutorial-basics', fileName),
    ];

    let saved = false;
    for (const targetPath of possiblePaths) {
      try {
        const dirPath = path.dirname(targetPath);
        await fs.access(dirPath);
        await fs.writeFile(targetPath, categoryMarkdown);
        console.log(`✅ Saved: ${fileName}`);
        saved = true;
        break;
      } catch (error) {
        // Continue to next path
      }
    }

    if (!saved) {
      await fs.writeFile(fileName, categoryMarkdown);
      console.log(`⚠️ Saved to current directory: ${fileName}`);
    }
  }

  console.log('\n--- All categories processed ---');
  await browser.close();
};

// Run it
getCourseStructure();