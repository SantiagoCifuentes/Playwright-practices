import {test, expect} from  '@playwright/test'

test('Locators in Playwright', async ({page}) => {

    await page.goto('https://github.com/SantiagoCifuentes')

    // await page.getByRole('link', {name: 'Sign in'}).click();
   
    await page.getByLabel('Homepage', {exact: true}).first().click();

   
    
});