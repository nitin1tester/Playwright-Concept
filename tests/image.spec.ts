import test from "playwright/test";


test('Image',async ( {page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.getByAltText("company-branding").highlight();
    await page.waitForTimeout(14000);
} )