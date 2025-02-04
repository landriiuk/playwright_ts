import { test } from '../../fixtures/baseFixture';
import {
  accountDetails,
  addressDetails,
  personalDetails,
} from '../../testData/registerDetails';
import { ILoginDetails } from '../../testData/interfaces/authPage.interfaces';
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

  test('UI_TC_006 Verify user can login successfully', async ({
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
    });

    await test.step('Login with valid credentials', async () => {
      if (!process.env.LOGIN || !process.env.PASSWORD) {
        throw new Error('LOGIN and PASSWORD environment variables must be set');
      }
      const loginDetails: ILoginDetails = {
        loginName: process.env.LOGIN,
        password: process.env.PASSWORD,
      };
      await loginPage.fillLoginDetails(loginDetails);
      await loginPage.clickLoginButton();
    });
  });
});
