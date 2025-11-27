import {test, expect} from  '@playwright/test'


test.beforeAll(async () => {
    console.log('Before all tests');
});

test.beforeEach(async ({ page }) => {
    console.log('Before each test');
    await page.goto('https://www.google.com/')
});

test.afterEach(async () => {
    console.log('After each test');
});

test.afterAll(async () => {
    console.log('After all tests');
});

test('first test', async ({page}) => {

    // await page.goto('https://www.google.com/')
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
    
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
    // await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Playwrightt enables reliable end-to-end testing for modern web apps.');
    
});


test('second test', async ({page}) => {

    // await page.goto('https://www.google.com/')
    await page.getByRole('combobox', { name: 'Buscar' }).fill('playwright');
    await page.getByRole('combobox', { name: 'Buscar' }).press('Enter');
    
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
    // await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Playwrightt enables reliable end-to-end testing for modern web apps.');
    
});