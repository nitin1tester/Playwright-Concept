(async()=>{
//     let browser:Browser = await chromium.launch({channel:'chrome',headless:false});
//     let page:Page = await browser.newPage();
//     await page.goto('https://letcode.in/table');
//   let elements = await page.locator('#shopping tbody tr').all();
//   for (let e of elements) {
//     const fruit = await e.locator('td:nth-child(1)').innerText();
//     const priceText = await e.locator('td:nth-child(2)').innerText();
//     if (parseInt(priceText) > 150) {
//       console.log(fruit);
//     }
//   }
// })();