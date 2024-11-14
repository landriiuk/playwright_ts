import { test } from '../../fixtures/baseFixture';
import {
  accountDetails,
  addressDetails,
  personalDetails,
} from '../../testData/registerDetails';

test.describe('Authentication tests', async () => {
  test('UI_TC_002 Verify that a user can register successfully with valid credentials', async ({
    homePage,
    loginPage,
  }) => {
    await test.step('Navigate to main page and verify if navigated', async () => {
      await homePage.navigateToPage();
      await homePage.verifyUrl();
    });
    await test.step('Navigate to login page', async () => {
      await loginPage.clickLoginOrRegister();
      await loginPage.verifyAccountLoginVisible();
      await loginPage.clickContinueButton();
    });

    await test.step('Fill register form details and submit', async () => {
      await loginPage.fillPersonalDetails(personalDetails);
      await loginPage.fillAddressDetails(addressDetails);
      await loginPage.fillAccountDetails(accountDetails);

      await loginPage.submitForm();
    });

    await test.step('Verify account is created', async () => {
      await loginPage.verifyAccountCreated();
    });
  });
});
