import test, { Locator } from "playwright/test";



test('Multiple elements handling',async ({page})=>{
    await page.goto("https://testing.qaautomationlabs.com/form.php");
    let allLinks:Locator[] = await page.locator('a').all();
    console.log("Total number of links : "+allLinks.length);
    // console.log(allLinks);
    for(let e of allLinks){
        let text = await e.innerText();
        let href = await e.getAttribute('href');
        console.log(`${text.trim()} : ${href}`);
    }
})

test('get images',async ({page})=>{
    await page.goto("https://www.flipkart.com/");
    let image:Locator[] = await page.locator('img[alt="Image"]').all();
    console.log("total number of images :",image.length);
    for(let e of image){
        let imageAlt = await e.getAttribute('alt');
        let imageLink = await e.getAttribute('src');

        console.log(`${imageAlt} : ${imageLink}`);
    }

})

