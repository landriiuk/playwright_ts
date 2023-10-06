import { test } from '../../fixtures/baseFixture';
import { ukrainianLocalization } from '../../testData/variables';

test.describe('Explore rozetka using playwright', () => {

    test.beforeEach(async ({ rozetkaMainPage }) => {
        await rozetkaMainPage.navigateToRozetkaAndVerifyUrl(ukrainianLocalization.rozetkaTitle);
    });

    test('Verify if cart is empty', async ({ rozetkaMainPage }) => {
        await rozetkaMainPage.navigateToCart();
        await rozetkaMainPage.verifyIfCartIsEmpty(ukrainianLocalization.basket, ukrainianLocalization.emptyBasket);
    });

    test('Add product to a basket', async ({ navigationPage }) => {
        navigationPage.navigateToCategoryByName(ukrainianLocalization.laptopsAndComputers);
        navigationPage.navigateToCategoryByName(ukrainianLocalization.laptops);
    });
});