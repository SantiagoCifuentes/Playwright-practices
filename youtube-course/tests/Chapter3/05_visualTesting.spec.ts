import {test, expect} from  '@playwright/test'

test('Visual comparison', async ({page}) => {

    await page.goto('https://github.com/login')

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
   
    await page.locator('#login_field').fill('testuser');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');// it will fail because the page has changed after filling the username field
});


test('Element Visual comparison', async ({page}) => {

    await page.goto('https://github.com/login')

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
   
    const loginBox = page.locator('div[class="authentication-body authentication-body--with-form new-session"]');

    await expect(loginBox).toHaveScreenshot('GitHubLoginForm.png');

    await page.locator('#login_field').fill('testuser');

    await expect(loginBox).toHaveScreenshot('GitHubLoginForm.png');// it will fail because the form has changed after filling the username field
});


