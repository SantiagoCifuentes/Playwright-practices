import { test, expect } from '@playwright/test'
import testData from '../../test-data/qa/testdata.json';




type TestData = {
    
    TestDataSet1: {
        username: string;
        password: string;
    }
    TestDataSet2: {
        username: string;
        password: string;
    }

};

const data = testData as TestData;

for (const key in data) {
   const element = data[key as keyof TestData];

   test(`Data Driven Testing Using Json Files - ${element.username}`, async ({ browser }) => {



     const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto(`${process.env.BING_URL}`);
    await page2.getByRole('textbox', { name: 'Enter your search here -' }).fill(element.username);
    await page2.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');


    //create new tab in the same browser context
    const newTab = await context2.newPage();
    await newTab.goto('https://www.bing.com/');
    await newTab.getByRole('textbox', { name: 'Enter your search here -' }).fill(element.password);
    await newTab.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');

});

}



