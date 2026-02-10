import { test, expect } from '@playwright/test';

test('Mock API request ', async ({ page }) => {


    // Mocking API 
   await page.route('*/**/api/v1/fruits**',  async route => {
    const json = [
        {name: 'Apple', id: '1'},
        {name: 'Banana', id: '2'},
        {name: 'Orange', id: '3'},
    ];
    await route.fulfill({json});
   });


   // Go to url
   await page.goto('https://demo.playwright.dev/api-mocking/');

   //validating text

   await expect(page.getByText('Apple')).toBeVisible();
   await expect(page.getByText('Banana')).toBeVisible();
   await expect(page.getByText('Orange')).toBeVisible();    


});