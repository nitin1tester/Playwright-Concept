import test from "playwright/test";


test('Locator Chaining',async ({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/form.php");
    page.locator(`form`).getByRole('textbox',{name:'First Name:'}).fill(`Nitin Test`);

})

test('get player details',async ({page})=>{
    await page.goto("https://www.cricinfo.com/series/afghanistan-in-india-2026-1527147/india-vs-afghanistan-2nd-odi-1527152/full-scorecard");
    let rohit:string[] =  await page.locator('tbody').first().locator('tr').filter({hasText:'sh'}).locator('td').allInnerTexts();
    for(let s of rohit){
        console.log(s);
    }

    let fullData = await page.locator('tbody').first().locator('tr td').allInnerTexts();
    console.log(fullData);
    
})

