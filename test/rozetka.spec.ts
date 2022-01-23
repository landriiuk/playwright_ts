import { test, expect,Page } from '@playwright/test';
import { MainRozetkaPage } from '../test/pageObject/rozetka.main.page';
// const rozetkaMainPage = new MainRozetkaPage();
test.describe('Explore rozetka using playwright', () => {
  

    test.beforeEach(async function ({page}) {
        let rozetkaMainPage =new MainRozetkaPage(page);
        await rozetkaMainPage.navigateToRozetkaAndVerifyUrl('Интернет-магазин ROZETKA™: официальный сайт самого популярного онлайн-гипермаркета в Украине');
    });

    test('Verify if cart is empty', async ({page }) => {
        let rozetkaMainPage =new MainRozetkaPage(page);
        await rozetkaMainPage.navigateToCart();
        await rozetkaMainPage.verifyIfCartIsEmpty('Корзина','Корзина пуста');

        // await expect(page).toHaveTitle(/Playwright/);
        // await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
        // await expect(page.locator('text=TypeScript')).toBeVisible();
    });

});