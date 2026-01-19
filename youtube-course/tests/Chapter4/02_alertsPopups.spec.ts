import { test, expect } from '@playwright/test'

test('Handling dialog popups', async ({ page }) => {


    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


    page.once('dialog', async dialog => {
        dialog.accept();
        console.log(`Dialog message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    });

    await page.getByText('See an example alert', { exact: true }).click();



});


test('Handling alerts popups', async ({ page }) => {


    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


    page.once('dialog', async dialog => {
        // dialog.accept();
        dialog.dismiss();
        console.log(`Popup message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    });

    await page.getByText('See a sample confirm', { exact: true }).click();

});


test('Handling prompt popups', async ({ page }) => {


    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


    page.once('dialog', async (dialog) => {
        console.log(`Dialog message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
        await dialog.accept('Playwright Test');
    });

    await page.getByText('See a sample prompt', { exact: true }).click();

});