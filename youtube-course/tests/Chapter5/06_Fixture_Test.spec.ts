import { test } from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
import { ResultPage } from '../../src/pages/ResultPage';
import 'dotenv/config';

test('Fixture', async ({ page }) => {

    console.log('Test is starting...');

    //create objects of the pages
    const homePage = new HomePage(page);
    const resultPage = new ResultPage(page);
    const playlistPage = new PlaylistPage(page);

    //test steps

    // //    await homePage.fillSearch('playwright by testers talk');
    // // //    expect(page.locator('#sb_form_q')).toHaveText('playwright by testers talk');
    // //    await homePage.submitSearch();    

    //     await homePage.searchWithKeyword('playwright by testers talk');
    //    await expect(page.locator('#sb_form_q')).toHaveText('playwright by testers talk');

    //    await resultPage.clickOnPlaylist('Playwright by Testers Talk - YouTube')
    //    await page.screenshot({ path: 'search-filled.png' });
    //    await playlistPage.validatePageTitle('Playwright by Testers Talk ✅ - YouTube');

     await homePage.goToUrl();
     await homePage.searchWithKeyword('playwright by testers talk');
     await resultPage.clickOnPlaylist('Playwright by Testers Talk ✅')
     await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');


    console.log('Test has completed.');


});