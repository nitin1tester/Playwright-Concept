import test from "playwright/test";

test.use({storageState:'loginStorageStage.json'});

test('Dhashboard test',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    // await page.waitForTimeout(15000);
    // await page.pause();
})

test('Recruitment',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
    // await page.waitForTimeout(14000);
    await page.pause();
})