import { Browser, chromium, Page } from "playwright-core";

(async ()=>{
    let browser:Browser  = await chromium.launch({headless:false,channel:'chrome'});
    let page:Page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.context().storageState({path:'loginStorageStage.json'});
    await page.close();
})();
