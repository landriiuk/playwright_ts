import { expect, Locator, Page } from '@playwright/test';
import { MainRozetkaPage } from './rozetka.main.page';

export class NavigationMainPage extends MainRozetkaPage {
    readonly page: Page;
    readonly getLaptopCategory: Locator;
    readonly getSubCategory: Locator;
    readonly getProductsContainer: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.getLaptopCategory = page.locator('.menu-categories__icon');
        this.getSubCategory = page.locator('.tile-cats__heading');
        this.getProductsContainer = page.locator('.goods-tile__inner');
    }

    async navigateToCategoryByName(categoryName: string) {
        this.getLaptopCategory.getByText(categoryName).click();
    }
    //XXX if needed to select subcategory
    async selectSubCategory(subcategory: string) {
        this.getSubCategory.getByText(subcategory).click();
    }

    async addProductInTheBasket() {

    }
    //     async let getCategoryByName = (categoryName: string): void => {
    //     await this.laptopCategory.getByText(categoryName);
    // }
}