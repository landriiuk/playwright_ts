import { test } from "../../fixtures/baseFixture";

test.describe("Verify main page", async () => {
  test("UI_TC_001 Verify the home page loads without errors and displays all key elements.", async ({
    homePage,
  }) => {
    test.step("Navigate to main page", async () => {
      await homePage.navigateToPage();
    });
    test.step("Navigate to", async () => {
      await homePage.verifyUrl();
    });

    test.step("Verify the presence of the following key elements", async () => {
      test.step("Site Logo: Confirm that the logo is visible", async () => {
        await homePage.verifyLogoIsVisible();
      });

      test.step("Main Navigation Menu. Check for items: Login or Register, Specials, Account, Cart, Checkout", async () => {

      });
    });

    test.step("Navigate to", async () => {});

    test.step("Navigate to", async () => {});

    test.step("Navigate to", async () => {});
  });
});
// 1. **Open Google Chrome**.
// 2. **Navigate to** [Automation Test Store](https://automationteststore.com/).
// 3. **Wait for the page to fully load**.
// 4. **Verify the presence of the following key elements**:
//    - **Site Logo**: Confirm that the logo is visible and correctly displayed.
//    - **Main Navigation Menu**:
//      - Check for customer top menu items: Login or Register, Specials, Account, Cart, Checkout.
//      - Verify that these items are clickable and lead to the correct pages.
//    - **Secondary Navigation Bar**: Ensure visibility and correctness of the following items:
//      - Home, Apparel & Accessories, Makeup, Skincare, Fragrance, Men, Hair Care, Books.
// 5. **Footer Section**:
//    - Verify the presence of footer items: About Us, Contact Us, Testimonials, Newsletter Signup.
//    - Ensure that links in the footer are functional and direct users to the appropriate pages (About Us, Privacy Policy, Return Policy, Shipping Information, Contact Us, Site Map, Login).
