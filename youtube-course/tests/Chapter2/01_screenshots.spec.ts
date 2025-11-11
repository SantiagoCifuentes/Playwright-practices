import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://playwright.dev/');

//element screenshot
await page.locator('#__docusaurus').screenshot({ path: './screenshots/elementscreen.png'});


//page screenshot
await page.screenshot({ path: './screenshots/Pagescreen.png'});

//full page screenshot
await page.screenshot({ path: './screenshots/fullPagescreen.png', fullPage: true});
});