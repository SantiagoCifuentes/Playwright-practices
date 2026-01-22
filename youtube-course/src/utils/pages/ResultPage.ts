import { Locator, Page } from '@playwright/test';

export class ResultPage {

    readonly page: Page;
    

    constructor(page: Page) {  //we passe the page because each test will have its own page instance
        this.page = page;       
    }

    //methods
  

    async clickOnPlaylist(link: string) {
    await this.page.getByRole('link', { name: link }).click();
    }
}