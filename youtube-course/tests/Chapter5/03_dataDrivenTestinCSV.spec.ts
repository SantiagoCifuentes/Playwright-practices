import { test, expect } from '@playwright/test'
import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import * as path from 'path';


type TestRecords = {
    Skill1: string;
    Skill2: string;
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }
) as TestRecords[];
for (const record of records) {

    test(`Data Driven Testing Using CSV Files - ${record.Skill1}`, async ({ browser }) => {



        const context2 = await browser.newContext();
        const page2 = await context2.newPage();
        await page2.goto('https://www.bing.com/');
        await page2.getByRole('textbox', { name: 'Enter your search here -' }).fill(record.Skill1);
        await page2.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');


        //create new tab in the same browser context
        const newTab = await context2.newPage();
        await newTab.goto('https://www.bing.com/');
        await newTab.getByRole('textbox', { name: 'Enter your search here -' }).fill(record.Skill1);
        await newTab.getByRole('textbox', { name: 'Enter your search here -' }).press('Enter');

    });

}







