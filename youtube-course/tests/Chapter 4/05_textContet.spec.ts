import { test, expect } from '@playwright/test'

test('Get text & get attribute value', async ({ page }) => {

    await page.goto('https://github.com/SantiagoCifuentes');

    const name = await page.locator('[itemprop="additionalName"]').textContent();

    const trimmedName = name?.trim();
    console.log("Name is: " + trimmedName);
    expect(trimmedName).toBe('SantiagoCifuentes');

    const attr = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log("Attribute is: " + attr);

});