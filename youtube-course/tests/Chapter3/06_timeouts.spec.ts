import {test, expect} from  '@playwright/test'

test('timouts test', async ({page}) => {

    test.setTimeout(60 * 1000); // set timeout for this test to 60 seconds
    await page.goto('https://www.google.com/')
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
    
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click({ timeout: 20000 }); // set timeout for this action to 20 seconds
   
    // await page.waitForTimeout(6000); // static wait - not recommended
    
});