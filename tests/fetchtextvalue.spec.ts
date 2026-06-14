import test from "playwright/test";


test('fetch text',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByRole('textbox',{name:'Username'}).pressSequentially("Nitin Rastogi test",{delay:500});

    let text = await page.getByRole('textbox',{name:'Username'}).inputValue();
    console.log("This is text " + text);



})
