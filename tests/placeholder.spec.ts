import test from "playwright/test";


test('PlaceHolder',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username', {exact:true}).pressSequentially("nitintest",{delay:1000});
})