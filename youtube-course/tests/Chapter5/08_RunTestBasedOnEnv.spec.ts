import { test } from '../../src/fixture/TestFixture';
// import { HomePage } from '../../src/pages/HomePage';
// import { PlaylistPage } from '../../src/pages/PlaylistPage';
// import { ResultPage } from '../../src/pages/ResultPage';
import 'dotenv/config';

test('Fixture', async ({ homePage,resultPage,playlistPage,testData }) => {

    console.log('Test is starting...');


    //test steps
     await homePage.goToUrl();
     await homePage.searchWithKeyword(String(testData.Module1TestData?.Skill1));
     await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));
     await playlistPage.validatePageTitle('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial - YouTube');


    console.log('Skill 1 is: ',testData.Module1TestData?.Skill1 );
    console.log('Skill 2 is: ',testData.Module1TestData?.Skill2 );
    console.log('Skill 3 is: ',testData.Module1TestData?.Skill3 );

});