import { Locator, Page } from '@playwright/test';
import 'dotenv/config';

export class HomePage {

    readonly page: Page;
    readonly searchBox: Locator

    constructor(page: Page) {  //we passe the page because each test will have its own page instance
        this.page = page;

        //elements



        this.searchBox = page.getByRole('combobox', { name: 'Search' });
    }

    //methods
    async goToUrl() {
        await this.page.goto(`${process.env.YOUTUBE_URL}`);

    }

    // async fillSearch(keyword: string) {
    //     await this.searchBox.fill(keyword);
    // }

    // async submitSearch() {
    //     await this.searchBox.press('Enter');
    // }

    async searchWithKeyword(keyword: string) {
        await this.searchBox.click();
        await this.searchBox.fill(keyword);
        await this.searchBox.press('Enter');
    }
}