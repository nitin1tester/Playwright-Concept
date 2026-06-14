import test, { Locator } from "playwright/test";


test('multile element text',async({page})=>{
    await page.goto("https://www.flipkart.com/");
    let allInnerText : Locator[] = await page.locator('//a[@href]').all();
    let allTextContent : string[] = await page.locator('//a[@href]').allTextContents();

    // console.log("Count of AllInnerText : ",allInnerText.length);
    // console.log(allInnerText);
    console.log('==================================');
    console.log("count of AllTextContent : ",allTextContent.length);
    console.log(allTextContent);

    for(let e of allInnerText){
        let text:string = (await e.innerText()).trim().toLowerCase();
        if(text.match('mobiles')){
            e.click();
            await page.waitForTimeout(15000);
            break;
        }
    }
    



    

});