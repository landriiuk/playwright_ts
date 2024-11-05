import { test } from "../../fixtures/baseFixture";

test.describe("Authentication tests", async () => {
  test("UI_TC_002 Verify that a user can register successfully with valid credentials", async ({
    homePage,
    loginPage,
  }) => {
    const personalDetails: IPersonalDetailsRegister = {
      firstName: "Blabla",
      lastName: "bla bka",
      email: "blabka@example.com",
      telephone: "1234567890",
      fax: "9876543210",
    };

    const addressDetails: IAddressDetails = {
      company: "Example Company",
      address1: "123 Main St",
      address2: "Suite 456",
      city: "Example City",
      state: "3515", // Dropdown value
      country: "220", // Dropdown value
      postcode: "12345",
    };

    const accountDetails: ILoginDetails = {
      loginName: "uniqueuser123",
      password: "password123",
      confirmPassword: "password123",
    };
    await test.step("Navigate to main page and verify if navigated", async () => {
      await homePage.navigateToPage();
      await homePage.verifyUrl();
    });
    await loginPage.clickLoginOrRegister();
    await loginPage.verifyAccountLoginVisible();
    await loginPage.clickContinueButton();
    
    await loginPage.fillPersonalDetails(personalDetails);
    await loginPage.fillAddressDetails(addressDetails);
    await loginPage.fillAccountDetails(accountDetails);
    await loginPage.submitForm();
  });
});
