import {test, expect} from  '@playwright/test'

test('Locators in Playwright', async ({page}) => {

    // await page.goto('https://github.com/SantiagoCifuentes')

    // await page.getByRole('link', {name: 'Sign in'}).click();
   
    // await page.getByLabel('Homepage', {exact: true}).first().click();

    // await page.getByAltText("View SantiagoCifuentes's full-sized avatar").click();

    // await page.getByTestId('repositories').first().click();

//    await page.getByText('Sign up').click();

    // await page.goto('https://www.youtube.com/')
    // await page.getByPlaceholder('Search').click();
    // await page.getByPlaceholder('Search').fill('Playwright');
    // await page.getByPlaceholder('Search').press('Enter');

    // await page.locator('//input[@name="search_query"]').fill('Playwright');
    //  await page.locator('input[name="search_query"]').fill('Playwright');
    


    await page.goto('https://www.google.com/');
    await page.getByTitle('Buscar').fill('Playwright');
});