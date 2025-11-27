import { test, expect } from '@playwright/test'

test(' handling dropdown list ', async ({ page }) => {

    await page.goto('https://www.facebook.com/');

    await page.getByRole('button', { name: 'Create new account' }).click();
    //selec dropdown by value

    await page.getByLabel('Month').selectOption('6');

    //select dropdown using visible text

    await page.getByLabel('Month').selectOption('Aug');

    //validate all the options

    await expect(page.locator('#month   option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
});