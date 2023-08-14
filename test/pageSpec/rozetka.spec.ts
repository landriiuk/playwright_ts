import { test } from '@playwright/test';
import { MainRozetkaPage } from '../../pageObject/rozetka.main.page';
import { NavigationMainPage } from '../../pageObject/navigation.main.page';
import { ukrainianLocalization } from '../../testData/variables';

test.describe('Explore rozetka using playwright', () => {
    let rozetkaMainPage: MainRozetkaPage, navigationPage: NavigationMainPage;

    test.beforeEach(async function ({ page }) {
        rozetkaMainPage = new MainRozetkaPage(page);
        navigationPage = new NavigationMainPage(page);

        await rozetkaMainPage.navigateToRozetkaAndVerifyUrl(ukrainianLocalization.rozetkaTitle);
    });

    test('Verify if cart is empty', async ({ page }) => {
        let rozetkaMainPage = new MainRozetkaPage(page);
        await rozetkaMainPage.navigateToCart();
        await rozetkaMainPage.verifyIfCartIsEmpty(ukrainianLocalization.basket, ukrainianLocalization.emptyBasket);
    });

    test('Add product to a basket', async () => {
        navigationPage.navigateToCategoryByName(ukrainianLocalization.laptopsAndComputers);
        navigationPage.navigateToCategoryByName(ukrainianLocalization.laptops);
    });
});