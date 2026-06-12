import test from "playwright/test";


test('Fill with delay', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.getByRole('textbox',{name:'Username'}).pressSequentially("nitinTester",{delay:1000});
})