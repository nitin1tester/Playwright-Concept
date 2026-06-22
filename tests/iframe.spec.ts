import test, { Locator } from "playwright/test";


test('iframe',async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/');
    let loc:Locator = page.frameLocator('iframe[name="employeetable"]').locator('button#addBtn');
    await page.frameLocator('iframe[name="employeetable"]').locator('input#nameInput').pressSequentially("this is my test to type nitin ",{delay:500});
    await loc.click();
})
