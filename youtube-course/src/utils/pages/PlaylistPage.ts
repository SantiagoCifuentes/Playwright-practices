import { expect, Locator, Page } from '@playwright/test';

export class PlaylistPage {

    readonly page: Page;
    

    constructor(page: Page) {  //we passe the page because each test will have its own page instance
        this.page = page;       
    }

    //methods
  

    async validatePageTitle(title: string) {
       await expect(this.page).toHaveTitle(title);
    }
}