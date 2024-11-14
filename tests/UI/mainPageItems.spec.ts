import { test } from '../../fixtures/baseFixture';
import { footerBarItems, footerLinks } from '../../testData/mainPageVariables';

test.describe('Home page tests', async () => {
  test('UI_TC_001 Verify the home page loads without errors and displays all key elements.', async ({
    homePage,
  }) => {
    await test.step('Navigate to main page and verify if navigated', async () => {
      await homePage.navigateToPage();
      await homePage.verifyUrl();
    });

    await test.step('Verify the presence of the following key elements', async () => {
      test.step('Site Logo: Confirm that the logo is visible', async () => {
        await homePage.verifyLogoIsVisible();
      });

      await test.step('Main Navigation Menu. Check for items: Login or Register, Specials, Account, Cart, Checkout', async () => {
        await homePage.verifyMenuNavigationItems(
          homePage.getNavBarItemsContainer
        );
      });
    });

    await test.step('Secondary Navigation Bar: Check correctness of the items', async () => {
      await homePage.verifyItemsVisibility(homePage.getByLinkNameCommon);
    });

    await test.step('Footer Section', async () => {
      await test.step('Verify the presence of footer items: About Us, Contact Us, Testimonials, Newsletter Signup', async () => {
        await homePage.verifyItemsVisibility(
          homePage.footerContainer,
          footerBarItems
        );
      });

      await test.step('Ensure that links in the footer are functional and direct users to the appropriate pages', async () => {
        await homePage.verifyMenuNavigationItems(
          homePage.infoFooterLinks,
          footerLinks
        );
      });
    });
  });
});
