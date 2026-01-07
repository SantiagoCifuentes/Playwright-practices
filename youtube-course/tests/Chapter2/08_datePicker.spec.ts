import { test, expect } from '@playwright/test'

test(' Selecting date value ', async ({ page }) => {

    //hardcoded date
    await page.goto('https://jqueryui.com/datepicker/');
    const iframe = page.frameLocator('[class="demo-frame"]');
    // iframe.locator('[id="datepicker"]').fill('10/12/2024');

    //dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();


    // past date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Prev"]').click();
    await iframe.locator('text=29').click();

    //future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text=29').click();

});