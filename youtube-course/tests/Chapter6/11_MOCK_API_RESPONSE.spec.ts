import { test, expect } from '@playwright/test';

test('Mock API response ', async ({ page }) => {


    // Mocking API 
    await page.route('*/**/api/v1/fruits**', async route => {

       const response =  await route.fetch();
        const json = [ 
            { name: 'Apple',  id: '1' },
            { name: 'Banana', id: '2' },
            { name: 'Orange', id: '3' }
        ];
        
        await route.fulfill({ response, json });
    });


     await page.route('*/**/api/v1/fruits**', async route => {// this is to try why wasnt working with fruit names
                                                              // and was because of the method .push adds the same elements and if the elements exist it will not add them and the test will fail because it is looking for the exact text and if there are 2 or more elements with the same name it will not find them and will fail the test

       const response =  await route.fetch();
       const json = await response.json();
        json.push( { name: 'Hablalo',  id: '1' });
        json.push( { name: 'lalo', id: '2' });
        json.push( { name: 'jaa', id: '3' });
        
        await route.fulfill({ response, json });
    });



    // Go to url
    await page.goto('https://demo.playwright.dev/api-mocking/');

    //validating text

    await expect(page.getByText('Apple', { exact: true })).toBeVisible();
    await expect(page.getByText('Banana', { exact: true })).toBeVisible();
    await expect(page.getByText('Orange', { exact: true })).toBeVisible();


});