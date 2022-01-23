import { expect, Locator, Page } from '@playwright/test';

export class MainRozetkaPage {
    readonly page: Page;
    readonly getCartButton: Locator;
    readonly getTextIntoCart: Locator;
    readonly getCartTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getCartButton = page.locator('[href="#icon-header-basket"]');
        this.getCartTitle = page.locator('.modal__heading');
        this.getTextIntoCart = page.locator('.cart-dummy__heading');
        // this.coreConceptsLink = page.locator('text=Core concepts');
        // this.bodyBrowsers = page.locator('p:nth-child(3) > a');
    }

    async navigateToRozetkaAndVerifyUrl(text:string) {
        await this.page.goto('https://rozetka.com.ua/');
        await expect(this.page).toHaveURL('https://rozetka.com.ua/');
        await expect(this.page).toHaveTitle(text);
    }

    async navigateToCart() {
        await this.getCartButton.click();
    }
    async verifyIfCartIsEmpty(titleCart: string, text: string) {
        await expect(this.getCartTitle).toHaveText(titleCart);
        await expect(this.getTextIntoCart).toHaveText(text);
    }
}

// function click(getBasket: Locator) {
//     throw new Error('Function not implemented.');
// }
