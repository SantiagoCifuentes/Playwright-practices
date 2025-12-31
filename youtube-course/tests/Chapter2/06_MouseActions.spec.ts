import { test, expect } from '@playwright/test'

test(' Mouse actions ', async ({ page }) => {

    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');

    // await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({button: 'left'});
    // await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click({button: 'middle'});


    //mouse hover

    await page.getByLabel('Búsqueda por voz').hover();


    //double click
     await page.getByLabel('Búsqueda por voz').dblclick();

});