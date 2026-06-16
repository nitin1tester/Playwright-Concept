import { Locator } from "@playwright/test";
import test, { Browser, chromium, Page } from "playwright/test";


// Note :- run only one test as a time.


//Using test you can run this directly using playwright.
test('Print items with price greater than 150', async ({ page }) => {
  await page.goto('https://letcode.in/table');
  let elements = await page.locator('#shopping tbody tr').all();
  for (let e of elements) {
    const fruit = await e.locator('td:nth-child(1)').innerText();
    const priceText = await e.locator('td:nth-child(2)').innerText();
    if (parseInt(priceText) > 150) {
      console.log(fruit);
    }
  }
});


// Using IIFE  you can execuate this program by commenting above test method as this IIFE will immediatly invoke while running this ts file.

(async()=>{
    let browser:Browser = await chromium.launch({channel:'chrome',headless:false});
    let page:Page = await browser.newPage();
    await page.goto('https://letcode.in/table');
  let elements = await page.locator('#shopping tbody tr').all();
  for (let e of elements) {
    const fruit = await e.locator('td:nth-child(1)').innerText();
    const priceText = await e.locator('td:nth-child(2)').innerText();
    if (parseInt(priceText) > 150) {
      console.log(fruit);
    }
  }
})();


/**
 * 
 *  xpath >> //table[@matsort]//tr[td[2][normalize-space()='237']]/td[1]
 * 
 */