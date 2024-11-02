import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getLogo: Locator;
  readonly getHomeItemMenuBar: Locator;
  readonly getNavBarItems: Locator;
  readonly getTopMenuNavBarItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogo = this.page.getByTitle("Automation Test Store");
    this.getHomeItemMenuBar = this.page.locator(".menu_home");
    this.getNavBarItems = this.page.locator(".main_menu");
    this.getTopMenuNavBarItems = this.getNavBarItems.locator(".top");
  }

  async navigateToPage(url: string = process.env.BASE_UR || "") {
    await this.page.goto(url);
  }
  async verifyUrl(url: string = process.env.BASE_UR || "") {
    await expect(this.page).toHaveURL(url);
  }

  async verifyLogoIsVisible() {
    await expect(this.getLogo).toBeVisible();
  }

  async verifyMainMenuNavigationItems() {
    const mainMenuItems = {
    '':''
    }
    for (let i = 0; i < (await this.getNavBarItems.count()); i++) {
      // if (await this.getTopMenuNavBarItems.isVisible()) {
      for (let i = 0; i < (await this.getTopMenuNavBarItems.count()); i++) {
        expect(this.getTopMenuNavBarItems.nth(i).innerText()).toBe(mainMenuItems[i]);
      }

      //}
    }
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }
  }
}
