import test from "playwright/test";


test('Load state',async ({page})=>{
    //Page loading states
    // wait until load all the resources loaded on page (default)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'load'});
    // wait until DOM loaded 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    // wait until not network activity for 500 ms (not recomanded)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'networkidle'});
    // wait until  server commit first bite
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'commit'});

    //
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{timeout:5000});

    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{referer:''})



})