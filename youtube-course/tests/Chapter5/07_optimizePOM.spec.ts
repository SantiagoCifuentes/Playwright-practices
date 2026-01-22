import { test } from '../../src/fixture/TestFixture';
// import { HomePage } from '../../src/pages/HomePage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';
// import { ResultPage } from '../../src/pages/ResultPage';
import 'dotenv/config';

test('Fixture', async ({ homePage,resultPage,playlistPage }) => {

    console.log('Test is starting...');

    //create objects of the pages
    // const homePage = new HomePage(page);
    // const resultPage = new ResultPage(page);
    // const playlistPage = new PlaylistPage(page);

    //test steps
     await homePage.goToUrl();
     await homePage.searchWithKeyword('playwright by testers talk');
     await resultPage.clickOnPlaylist('Playwright by Testers Talk ✅')
     await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');


    console.log('Test has completed.');


});