import {test,expect,Browser, BrowserContext, Page, chromium, } from '@playwright/test';

test("A/B Test Variation 1",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/abtest");
    let text : string = await page.getByRole('heading', { name: 'A/B Test Variation 1', level: 3 }).innerText();
    console.log('this is my text'+ text);
    if (text.match("A/B Test Variation 1" )|| text.match('')) {
      expect(text).toEqual('A/B Test Variation 1');
    }else{
      expect(text).toEqual('A/B Test Variation 1');
    }
})


// here we are not passing any fixture
test("Open Test site",async ({})=>{
  let browser : Browser  = await chromium.launch();
  let page : Page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/")
})
