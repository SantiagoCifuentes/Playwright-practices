import { test, expect } from '@playwright/test'

test('iterating matching elements', async ({ page }) => {

    await page.goto('https://github.com/SantiagoCifuentes');

    const repositoryLinks = await page.$$('.repo');
    for (const repoLink of repositoryLinks) {
        const text = await repoLink.textContent();
        console.log("Repository: " + text?.trim());
    }

    console.log("---------");
    
    const repositoryLinks2 = await page.locator('.repo');
    const count = await repositoryLinks2.count()
    for (let i = 0; i < count; i++) {
        const text = await repositoryLinks2.nth(i).textContent();
        console.log("Repository2: " + text?.trim());
    }
    
   
});