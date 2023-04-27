import { test} from '@playwright/test';
import { MainRozetkaPage } from '../pageObject/rozetka.main.page';

let rozetkaTitle: string = 'Інтернет-магазин ROZETKA™: офіційний сайт найпопулярнішого онлайн-гіпермаркету в Україні';

test.describe('Explore rozetka using playwright', () => {

    test.beforeEach(async function ({ page }) {
        let rozetkaMainPage = new MainRozetkaPage(page);
        await rozetkaMainPage.navigateToRozetkaAndVerifyUrl(rozetkaTitle);
    });

    test('Verify if cart is empty', async ({ page }) => {
        let rozetkaMainPage = new MainRozetkaPage(page);
        await rozetkaMainPage.navigateToCart();
        await rozetkaMainPage.verifyIfCartIsEmpty('Кошик', 'Кошик порожній');
    });
});