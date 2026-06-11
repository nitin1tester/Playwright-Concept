
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright-core";

(async ()=>{
    let browser:Browser = await chromium.launch({channel:'chrome',headless:false});

    let context1:BrowserContext = await browser.newContext();
    let page1:Page = await context1.newPage();
    await page1.goto("https://login.leadsquared.com");

    let context2:BrowserContext = await browser.newContext();
    let page2:Page = await context2.newPage();
    await page2.goto("https://login.leadsquared.com");

    page1.close();
    page2.close();

})();