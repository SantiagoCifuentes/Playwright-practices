import { test, expect } from '@playwright/test'
import { readExcelFile } from '../../src/utils/ExceHelper';
import * as path from 'path';
import { read } from 'fs';


const filepath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');

const records = readExcelFile(filepath);

console.log('Total records:', records.length);
console.log(records);


for (let index = 0; index < records.length; index++) {
    const record = records[index];

    test(`Data Driven Testing Using EXCEL Files - ${record.Skill2 || `Record ${index + 1}`}`, async ({ browser }) => { // the index is used here because for some reason the excel content is not being read properly sometimes



        const context2 = await browser.newContext();
        const page2 = await context2.newPage();
        await page2.goto('https://www.bing.com/');
        await page2.getByRole('textbox', { name: 'Enter your search here -' }).fill(record.Skill2);
        await page2.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');


        //create new tab in the same browser context
        const newTab = await context2.newPage();
        await newTab.goto('https://www.bing.com/');
        await newTab.getByRole('textbox', { name: 'Enter your search here -' }).fill(record.Skill2);
        await newTab.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');

    });

}







