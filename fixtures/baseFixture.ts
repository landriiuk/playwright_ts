import { test as base } from "@playwright/test";
import { HomePage } from "../pageObject/home.page";

type MyFixtures = {
  homePage: HomePage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});
export { expect } from "@playwright/test";
