import {test, expect} from  '@playwright/test'

test('Trying record test', async ({page}) => {

    await page.goto('https://www.google.com/')
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
    
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
    // await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');

    
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect(page.getByRole('banner')).toContainText('Get started');

        
});