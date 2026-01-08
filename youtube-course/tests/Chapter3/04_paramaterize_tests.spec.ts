import { test, expect } from '@playwright/test'

const searchLeywords = ['playwright by testers talk', 'javascript by testers talk', 'cypress by testers talk'];

for (const keyword of searchLeywords) {
    test(`Parameterize Tests - ${keyword}`, async ({ page }) => {

        //enter action
        await page.goto('https://www.youtube.com/');


        //verify url, page title, text, number of elements(count)

        await page.getByPlaceholder('Search', { exact: true }).first().click();
        await page.getByPlaceholder('Search', { exact: true }).first().fill(keyword);
        await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

        await expect(page).toHaveTitle(keyword + ' - YouTube');


        await expect(page.locator('span[id="title"]')).toHaveText('People also watched');//--> it works to see how many elements with same locator are present on the page


    });
}

