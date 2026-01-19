import { test, expect } from '@playwright/test'

test('Multiple browsers/tabs', async ({ page, browser }) => {

    // await page.goto('https://www.google.com/')
    // await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    // await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');

    // await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
    // // await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();

    // await expect(page.getByRole('heading', { level: 1 })).toContainText('Playwrightt enables reliable end-to-end testing for modern web apps.');


    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://www.bing.com/');
    await page2.getByRole('textbox', { name: 'characters out of 2000' }).fill('playwright');
    await page2.getByRole('textbox', { name: 'characters out of 2000' }).press('Enter');


    //create new tab in the same browser context
    const newTab = await context2.newPage();
    await newTab.goto('https://www.bing.com/');
    await newTab.getByRole('textbox', { name: 'characters out of 2000' }).fill('playwright');
    await newTab.getByRole('textbox', { name: 'characters out of 2000' }).press('Enter');
});