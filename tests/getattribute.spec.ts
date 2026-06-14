import test from "playwright/test";


test('get attribute',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let attr1 = await page.getByRole('textbox',{name:'Username',exact:true}).getAttribute('placeholder');
    console.log(attr1);

    let link = await page.getByText('Forgot your password?', { exact: true }).getAttribute('href');
    console.log(link);
})