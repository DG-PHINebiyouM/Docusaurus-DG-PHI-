import puppeteer from "puppeteer"

const getWholeIgPage = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  // Open a new page
  const page = await browser.newPage();

  // On this new page:
  // - open the ignition website
  // - wait until the dom content is loaded (HTML is ready)
  await page.goto("https://inductiveuniversity.com/courses/ignition/ignition-overview/8.1", {
    waitUntil: "domcontentloaded",
  });

  // Wait for the course list to appear on the page
  await page.waitForSelector('#course-list', { timeout: 10000 });



  // Get all ul elements inside #course-list
  const ulElements = await page.$$('#course-list > ul');
  console.log(`Found ${ulElements.length} course sections`);

  // Process each ul element
  for (let i = 0; i < ulElements.length; i++) {
    console.log(`\n--- Course Section ${i + 1} ---`);
    
    // Get the content of each ul
    const content = await page.evaluate((el) => {
      return {
        text: el.textContent.trim(),
        html: el.innerHTML,
        childCount: el.children.length
      };
    }, ulElements[i]);
    
    console.log('Text:', content.text);
    console.log('Number of items:', content.childCount);
  }

  // Alternative: Get all course data at once
  const allCourseData = await page.evaluate(() => {
    const courseList = document.getElementById('course-list');
    const uls = courseList.querySelectorAll('ul');
    
    return Array.from(uls).map((ul, index) => {
      // Get any links or list items inside each ul
      const items = Array.from(ul.querySelectorAll('li')).map(li => ({
        text: li.textContent.trim(),
        link: li.querySelector('a')?.href || null
      }));
      
      return {
        sectionIndex: index + 1,
        items: items,
        totalItems: items.length
      };
    });
  });

  console.log('\n--- All Course Data ---');
  console.log(JSON.stringify(allCourseData, null, 2));

  // Keep browser open for debugging
  // await browser.close();
};

// Start the scraper
getWholeIgPage();