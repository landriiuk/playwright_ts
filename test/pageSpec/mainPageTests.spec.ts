// example.spec.ts
import { test, expect } from '@playwright/test';
import { MainPage } from '../pageObject/main.page';

test('Navigate and verify browsers text', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goToMainPageAndVerifyUrl();
    await mainPage.verifyBrowsersText();
});

// test('Search bar', async () => {

// });