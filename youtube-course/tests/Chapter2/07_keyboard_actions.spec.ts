import { test, expect } from '@playwright/test'

test(' Keyboard actions ', async ({ page }) => {

  //enter action
  await page.goto('https://www.google.com/');
  // await page.getByLabel('Buscar', { exact: true}).first().click();
  // await page.getByLabel('Buscar', { exact: true}).first().fill('Playwright by Testers Talk');
  // await page.getByLabel('Buscar', { exact: true}).first().press('Enter');

  // // select and  delete action
  // await page.getByLabel('Buscar', { exact: true}).first().click();
  // await page.keyboard.press('Control+A');
  // await page.keyboard.press('Delete');


  //tab and enter action
 await page.getByLabel('Buscar', { exact: true}).first().click();
 await page.keyboard.press('Tab');
 await page.keyboard.press('Enter');

});