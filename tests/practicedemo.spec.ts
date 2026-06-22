import test from "playwright/test";

test('HR wants to create a new employee.',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox',{name:'Username'}).fill('Admin');
    await page.getByRole('textbox',{name:'Password'}).fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByText('PIM', { exact: true }).click();

    await page.pause();
})
