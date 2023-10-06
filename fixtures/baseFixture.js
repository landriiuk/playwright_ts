import { test as baseTest, expect as expectFixture } from "@playwright/test";
import { NavigationMainPage } from '../pageObject/navigation.main.page';
import { MainRozetkaPage } from '../pageObject/rozetka.main.page';

export const test = baseTest.extend({
    navigationPage: async ({ page }, use) => {
        await use(new NavigationMainPage(page));
    },
    rozetkaMainPage: async ({ page }, use) => {
        await use(new MainRozetkaPage(page));
    }
});
export const expect = expectFixture;