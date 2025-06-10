import puppeteer from "puppeteer"

export const getSubLinks = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1", {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('#course-list', { timeout: 10000 });

  // Extract all subcategories and create links
  const subcategoryData = await page.evaluate(() => {
    const courseList = document.getElementById('course-list');
    const uls = courseList.querySelectorAll('ul');
    const baseUrl = "https://inductiveuniversity.com/courses/ignition/{subcategory}/8.1";
    
    const allSubcategories = [];
    const allLinks = [];
    
    // Process each ul (course section)
    Array.from(uls).forEach((ul, sectionIndex) => {
      // Get all anchor links within the ul
      // These are the actual subcategory links, not the section headers
      const links = ul.querySelectorAll('li a');
      
      Array.from(links).forEach((link) => {
        const subcategoryName = link.textContent.trim();
        const href = link.href;
        let urlSlug = '';
        
        // Extract slug from existing href
        if (href && href.includes('/courses/ignition/')) {
          const matches = href.match(/\/courses\/ignition\/([^\/]+)\//);
          if (matches && matches[1]) {
            urlSlug = matches[1];
          }
        }
        
        // If no slug found from href, create one from the name
        if (!urlSlug && subcategoryName) {
          urlSlug = subcategoryName
            .toLowerCase()
            .replace(/\s+in\s+ignition$/i, '-in-ignition')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
        }
        
        if (subcategoryName && urlSlug) {
          const fullUrl = baseUrl.replace('{subcategory}', urlSlug);
          
          allSubcategories.push({
            section: sectionIndex + 1,
            name: subcategoryName,
            slug: urlSlug,
            url: fullUrl
          });
          
          allLinks.push(fullUrl);
        }
      });
    });
    
    return {
      subcategories: allSubcategories,
      links: [...new Set(allLinks)] // Remove duplicates
    };
  });

  // Also get the structure with main categories for reference
  const fullStructure = await page.evaluate(() => {
    const courseList = document.getElementById('course-list');
    const uls = courseList.querySelectorAll('ul');
    const baseUrl = "https://inductiveuniversity.com/courses/ignition/{subcategory}/8.1";
    
    const structure = [];
    
    Array.from(uls).forEach((ul, index) => {
      // Get the section header (previous sibling or parent text)
      let sectionName = '';
      const prevElement = ul.previousElementSibling;
      if (prevElement && prevElement.tagName === 'LI') {
        sectionName = prevElement.textContent.trim();
      }
      
      // Get all subcategory links in this section
      const subcategories = [];
      const links = ul.querySelectorAll('a');
      
      links.forEach(link => {
        const text = link.textContent.trim();
        const href = link.href;
        let slug = '';
        
        if (href && href.includes('/courses/ignition/')) {
          const matches = href.match(/\/courses\/ignition\/([^\/]+)\//);
          if (matches && matches[1]) {
            slug = matches[1];
          }
        }
        
        if (!slug && text) {
          slug = text
            .toLowerCase()
            .replace(/\s+in\s+ignition$/i, '-in-ignition')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');
        }
        
        if (text && slug) {
          const url = baseUrl.replace('{subcategory}', slug);
          subcategories.push({
            name: text,
            slug: slug,
            url: url
          });
        }
      });
      
      if (subcategories.length > 0) {
        structure.push({
          section: index + 1,
          mainCategory: sectionName || `Section ${index + 1}`,
          subcategories: subcategories
        });
      }
    });
    
    return structure;
  });

  console.log('\n--- Full Course Structure ---');
  fullStructure.forEach(section => {
    console.log(`\nSection ${section.section}: ${section.mainCategory}`);
    section.subcategories.forEach(sub => {
      console.log(`  - ${sub.name}`);
    });
  });

  console.log('\n--- All Subcategory Links ---');
  const allLinks = fullStructure.flatMap(section => 
    section.subcategories.map(sub => sub.url)
  );
  
  // Remove duplicates
  const uniqueLinks = [...new Set(allLinks)];
  uniqueLinks.forEach((link, index) => {
    console.log(`${index + 1}. ${link}`);
  });

  console.log(`\nTotal unique links: ${uniqueLinks.length}`);

  // Test a few links
  console.log('\n--- Testing First 3 Links ---');
  for (let i = 0; i < Math.min(3, uniqueLinks.length); i++) {
    try {
      await page.goto(uniqueLinks[i], { waitUntil: 'domcontentloaded' });
      const title = await page.title();
      console.log(`✓ ${uniqueLinks[i]}`);
      console.log(`  Title: ${title}`);
      
    } catch (error) {
      console.log(`✗ ${uniqueLinks[i]} - Error: ${error.message}`);
    }
  }

  await browser.close();
  
  return uniqueLinks;
};

// Run the scraper
getSubLinks().then(links => {
  console.log('\n--- Final Array of All Links ---');
  console.log(JSON.stringify(links, null, 2));
  console.log(`\nTotal subcategory links: ${links.length}`);
}).catch(error => {
  console.error('Error:', error);
});

export default getSubLinks;