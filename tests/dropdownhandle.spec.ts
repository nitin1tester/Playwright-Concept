import test from "playwright/test";
test('Select dropdown',async({page})=>{
    await page.goto("https://orangehrm.com/book-a-free-demo");
    await page.getByRole('combobox',{name:'Country'}).selectOption({value:'India'}); // by value
    await page.waitForTimeout(5000);
    await page.getByRole('combobox',{name:'Country'}).selectOption({label:'Nepal'}); // label base
    await page.waitForTimeout(5000);
    await page.getByRole('combobox',{name:'Country'}).selectOption({index:16}); // index based(ignore this one)
    await page.waitForTimeout(5000);
})

test('Multi select',async({page})=>{

    await page.goto('https://testing.qaautomationlabs.com/dropdown.php');
    await page.locator('select#countryDropdown').selectOption(['India','UK'])
    await page.waitForTimeout(10000);

})

test('Fill a form',async ({page})=>{
    await page.goto('https://www.magupdate.co.uk/reader-enquiry/PATI/263');
    await page.getByRole('radio',{name: ` I do not wish to receive FREE copies of Aerospace Testing International regularly.`}).click();
    await page.getByRole('textbox',{name:'Title',exact:true}).fill("I am Title");
    await page.getByRole('textbox',{name:'Initials',exact:true}).pressSequentially('I am intials');

});

test('non select based multiselect',async ({page})=>{
    await page.goto('https://demo.mobiscroll.com/select/multiple-select');
    await page.locator('select#multiple-select').filter({hasText:'Books'}).first().selectOption('Books');
    await page.waitForTimeout(10000);
});

test('Search suggestion',async({page})=>{
    page.goto('');
})