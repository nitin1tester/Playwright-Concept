import test from "playwright/test";


test('Backward and forward ', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title());

    await page.goto("https://github.com/nitin1tester");
    console.log(await page.title());

    // go backward
    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(15000);
    
    // go forward
    await page.goForward();
    console.log(await page.title());
    await page.waitForTimeout(15000)

    //refresh page
    await page.reload();


})