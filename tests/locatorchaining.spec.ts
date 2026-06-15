import test from "playwright/test";


test('Locator Chaining',async ({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/form.php");
    page.locator(`form`).getByRole('textbox',{name:'First Name:'}).fill(`Nitin Test`);


})

