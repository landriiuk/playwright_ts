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
  }

  async navigateToRozetkaAndVerifyUrl(text: string) {
    await this.page.goto('https://rozetka.com.ua/ua/');
    await expect(this.page).toHaveURL('https://rozetka.com.ua/ua/');
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
