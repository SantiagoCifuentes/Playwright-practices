import { test, expect } from '@playwright/test'

test('checkbox and radio button', async ({ page }) => {

    await page.goto('https://jqueryui.com/checkboxradio/');

    const radio1 = await page.frameLocator('[class="demo-frame"]');
    //   await expect(radio1.locator('text=New York')).not.toBeChecked();
    //   await radio1.locator('text=New York').check();
    //   await expect(radio1.locator('text=New York')).toBeChecked();
    await expect(radio1.locator('[for="radio-1"]')).not.toBeChecked();
    await radio1.locator('[for="radio-1"]').check();
    await expect(radio1.locator('[for="radio-1"]')).toBeChecked();

    //radiobutton
    const checkbox = await page.frameLocator('[class="demo-frame"]');
    await expect(checkbox.locator('[for="checkbox-1"]')).not.toBeChecked();
    await checkbox.locator('[for="checkbox-1"]').check();
    await expect(checkbox.locator('[for="checkbox-1"]')).toBeChecked();

});