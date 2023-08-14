import { Locator, Page } from '@playwright/test';
import { MainRozetkaPage } from './rozetka.main.page';

export class NavigationMainPage extends MainRozetkaPage {
    readonly page: Page;
    readonly getSubCategory: Locator;
    readonly getProductsContainer: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.getSubCategory = page.locator('.tile-cats__heading');
        this.getProductsContainer = page.locator('.goods-tile__inner');
    }

    async navigateToCategoryByName(categoryName: string) {
        await this.page.getByRole('link', { name: categoryName }).last().click();
    }

    async selectSubCategory(subcategory: string) {
        this.page.waitForLoadState('domcontentloaded')
        await this.page.getByText(subcategory).click();
    }

    async addProductInTheBasket() {

    }
}