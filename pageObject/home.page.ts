import { expect, type Locator, type Page } from '@playwright/test';
import { navBarItems, subNavBarItems } from '../testData/mainPageVariables';

export class HomePage {
  readonly page: Page;
  readonly getLogo: Locator;
  readonly getHomeItemMenuBar: Locator;
  readonly getNavBarItemsContainer: Locator;
  readonly getNavigationCrumbContainer: Locator;
  readonly getByLinkNameCommon: (elementName: string) => Locator; //should be in common

  readonly footerContainer: Locator;
  readonly infoFooterLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogo = this.page.getByTitle('Automation Test Store');
    this.getHomeItemMenuBar = this.page.locator('.menu_home');
    this.getNavBarItemsContainer = this.page.locator('.navbar-right');
    this.getNavigationCrumbContainer = this.page.locator('.breadcrumb');

    this.getByLinkNameCommon = (elementName: string) =>
      this.page.getByRole('link', { name: elementName, exact: true });
    this.footerContainer = this.page.locator('.footersocial');
    this.infoFooterLinks = this.page.locator('.info_links_footer li');
  }

  async navigateToPage(url: string = process.env.BASE_UR || '') {
    await this.page.goto(url);
  }
  async verifyUrl(url: string = process.env.BASE_UR || '') {
    await expect(this.page).toHaveURL(url);
  }

  async verifyLogoIsVisible() {
    await expect(this.getLogo).toBeVisible();
  }

  async verifyMenuNavigationItems(
    getLocator: Locator,
    items: any = navBarItems
  ) {
    for (const item in items) {
      await getLocator.getByText(item, { exact: true }).nth(0).click();

      await expect(this.getNavigationCrumbContainer).toContainText(items[item]);
    }
  }

  async verifyItemsVisibility(
    getLocator: Locator | ((item: string) => Locator),
    itemsArray: string[] = subNavBarItems
  ) {
    for (const item of itemsArray) {
      const locator =
        typeof getLocator === 'function' ? getLocator(item) : getLocator;
      await expect(locator).toBeVisible();
    }
  }
}
