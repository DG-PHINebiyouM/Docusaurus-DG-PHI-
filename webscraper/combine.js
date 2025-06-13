import puppeteer from "puppeteer";
import {getSubLinks} from "./coursescrapeDIMP.js"
import {getTranscript} from "./getScript-secondit.js"


//Final build Useful script
function randomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

async function getAllTranscript() {
    try {
        const subCatLinks = await getSubLinks(true);
        const LONG_BREAK_AFTER = 5; // Take longer break every 5 courses
        
        for (let i = 0; i < subCatLinks.length; i++) {
            console.log(`\n📚 Processing course ${i + 1} of ${subCatLinks.length}`);
            
            await getTranscript(subCatLinks[i]);
            
            if (i < subCatLinks.length - 1) {
                // Longer break every few courses
                if ((i + 1) % LONG_BREAK_AFTER === 0) {
                    const longDelay = randomDelay(60, 120); // 1-2 minutes
                    console.log(`😴 Taking a ${longDelay/1000} second break after ${i + 1} courses...`);
                    await new Promise(resolve => setTimeout(resolve, longDelay));
                } else {
                    // Normal delay between courses
                    const delay = randomDelay(10, 25); // Slightly longer than your current
                    console.log(`⏱️  Waiting ${delay/1000} seconds before next course...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        console.log('\n✅ All courses completed!');
        
    } catch (error) {
        console.error("Failed:", error);
    }
}

//run script
/* 
Issued with script/scripts
1. .md files are not generated in order 1,2,3,4....
2. .md files throw an error for any "</>" tag within the transcript
3. does not create folders based on the category then put the .md files in subcategories eg(Main cat: Tags; Sub cat: Tags in ignition)
4. Too slow but has to be in order not be be flagged as a robot.
*/
getAllTranscript();

