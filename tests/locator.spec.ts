import test from "playwright/test";

/**
 *  Role >  
 */

test('',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // await page.getByRole('textbox').first().fill("admin");
    // await page.getByRole('textbox').nth(0).fill("admin");

    await page.getByRole('textbox',{name:'Password'}).fill("admin123");
    await page.getByRole('button',{name:'Login'}).click();

    await page.pause();
    

})