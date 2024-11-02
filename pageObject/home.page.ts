import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getLogo: Locator;
  readonly getHomeItemMenuBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogo = this.page.getByTitle("Automation Test Store");
    this.getHomeItemMenuBar = this.page.locator(".menu_home");
  }

  async navigateToPage(url: string = process.env.BASE_UR || "") {
    await this.page.goto(url);
  }
  async verifyUrl(url: string = process.env.BASE_UR || "") {
    await expect(this.page).toHaveURL(url);
  }
}
