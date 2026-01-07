import { test, expect } from '@playwright/test'

test('Hard  Assertions ', async ({ page }) => {

  //enter action
  await page.goto('https://www.youtube.com/');


  //visible, editable, enabled, empty
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
  await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();


  //verify url, page title, text, number of elements(count)

  await page.getByPlaceholder('Search', { exact: true }).first().click();
  await page.getByPlaceholder('Search', { exact: true }).first().fill('playwright by testers talk');
  await page.getByPlaceholder('Search', {exact: true}).first().press('Enter');
  await expect(page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

  await expect(page).toHaveTitle('playwright by testers talk - YouTube')


  await expect(page.locator('span[id="title"]')).toHaveText('People also watched');//--> it works to see how many elements with same locator are present on the page
  await expect(page.locator('span[id="title"]')).toHaveCount(1);

});