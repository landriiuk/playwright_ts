import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly coreConceptsLink: Locator;
    readonly bodyBrowsers: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('text=Get started');
        this.coreConceptsLink = page.locator('text=Core concepts');
        this.bodyBrowsers = page.locator('p:nth-child(3) > a');
    }

    async goToMainPageAndVerifyUrl() {
        await this.page.goto('https://playwright.dev');
        await expect(this.page).toHaveURL('https://playwright.dev/');
    }

    async verifyBrowsersText() {
        await expect(this.bodyBrowsers).toHaveText(['TypeScript', 'JavaScript', 'Python', '.NET', 'Java'])
    }
}