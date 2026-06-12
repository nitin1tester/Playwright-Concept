import test from "playwright/test";

test('Highlight Element',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByRole('textbox',{name:'Username'}).highlight();
    await page.waitForTimeout(10000);
})