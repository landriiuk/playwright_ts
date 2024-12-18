import { Page } from '@playwright/test';
import { HomePage } from './home.page';

export class CheckoutPage extends HomePage {
  constructor(page: Page) {
    super(page);
  }
}
