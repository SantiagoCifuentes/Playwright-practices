import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await test.step('Handling droppable', async () => {
        await page.goto('https://jqueryui.com/droppable/');


        //frame handling
        const iFrame = page.frameLocator('[class="demo-frame"]'); 
        

        //drag elemnt, drop element
        const dragElement = iFrame.locator('[id="draggable"]');
        const dropElement = iFrame.locator('[id="droppable"]');

        await dragElement.dragTo(dropElement);


    });


});