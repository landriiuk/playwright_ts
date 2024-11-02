import { test } from "../../fixtures/baseFixture";

test.describe("Verify main page", async () => {
  test("UI_TC_001 Verify the home page loads without errors and displays all key elements.", async ({
    homePage,
  }) => {
    await homePage.navigateToPage();
    await homePage.verifyUrl();
  });
});
