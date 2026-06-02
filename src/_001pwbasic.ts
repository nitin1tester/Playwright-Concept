
import { Browser, chromium, firefox, Page, webkit } from "playwright-core";

(async ()=>{
    // Chromium
    // let browser:Browser = await chromium.launch({channel:'chrome',headless:false});
    // let browser:Browser = await chromium.launch({channel:'msedge',headless:false});
    // let browser:Browser = await chromium.launch({channel:'chromium',headless:false}); // recently interduce CFT 
    // Firefox (nightly built )
    // let browser:Browser = await firefox.launch({headless:false});
    //webkit Safari
    let browser:Browser = await webkit.launch({headless:false});

    let page:Page = await browser.newPage();
    await page.goto("https://the-internet.herokuapp.com");
    let titleText:string = await page.title();
    console.log('Page title is'+titleText);
    if (titleText.match('Internet')) {
        console.log('Test Pass');
    }else{
        console.log('Test fail');
    }
    await browser.close();
})();