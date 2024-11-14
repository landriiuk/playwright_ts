import { Locator, Page, expect } from '@playwright/test';
import { HomePage } from './home.page';

export class LoginPage extends HomePage {
  private readonly getLoginButton: Locator;
  private readonly continueButton: Locator;

  private readonly formBase: string;
  private readonly newCustomerFormPage: Locator;
  //personal details
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly email: Locator;
  private readonly telephone: Locator;
  private readonly fax: Locator;
  //address details
  private readonly company: Locator;
  private readonly address1: Locator;
  private readonly address2: Locator;
  private readonly city: Locator;
  private readonly state: Locator;
  private readonly postcode: Locator;
  private readonly country: Locator;
  //login details
  private readonly loginName: Locator;
  private readonly password: Locator;
  private readonly confirmPassword: Locator;
  private readonly termsCheckbox: Locator;

  private readonly accountCreatedMessage: Locator;
  constructor(page: Page) {
    super(page);
    this.getLoginButton = this.getByLinkNameCommon('Login or register');
    this.continueButton = page.getByRole('button', { name: ' Continue' });

    this.formBase = '#AccountFrm_';
    this.newCustomerFormPage = page.locator('.newcustomer .heading2');
    this.firstName = page.locator(`${this.formBase}firstname`);
    this.lastName = page.locator(`${this.formBase}lastname`);
    this.email = page.locator(`${this.formBase}email`);
    this.telephone = page.locator(`${this.formBase}telephone`);
    this.fax = page.locator(`${this.formBase}fax`);
    this.company = page.locator(`${this.formBase}company`);
    this.address1 = page.locator(`${this.formBase}address_1`);
    this.address2 = page.locator(`${this.formBase}address_2`);
    this.city = page.locator(`${this.formBase}city`);
    this.state = page.locator(`${this.formBase}zone_id`);
    this.postcode = page.locator(`${this.formBase}postcode`);
    this.country = page.locator(`${this.formBase}country_id`);
    this.loginName = page.locator(`${this.formBase}loginname`);
    this.password = page.locator(`${this.formBase}password`);
    this.confirmPassword = page.locator(`${this.formBase}confirm`);
    this.termsCheckbox = page.getByLabel('I have read and agree to the');
    this.accountCreatedMessage = page.locator('.maintext');
  }
  async clickLoginOrRegister() {
    await this.getLoginButton.click();
  }

  async verifyAccountLoginVisible() {
    await expect(this.newCustomerFormPage).toHaveText('I am a new customer.');
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async fillPersonalDetails(details: IPersonalDetailsRegister) {
    await this.firstName.fill(details.firstName);
    await this.lastName.fill(details.lastName);
    await this.email.fill(details.email);
    await this.telephone.fill(details.telephone);
    await this.fax.fill(details.fax);
  }
  async fillAddressDetails(details: IAddressDetails) {
    await this.company.fill(details.company);
    await this.address1.fill(details.address1);
    if (details.address2) {
      await this.address2.fill(details.address2);
    }
    await this.country.selectOption(details.country);
    await this.city.fill(details.city);
    await this.postcode.fill(details.postcode);
    await this.state.selectOption(details.state);
  }

  async fillAccountDetails(details: ILoginDetails) {
    await this.loginName.fill(details.loginName);
    await this.password.fill(details.password);
    await this.confirmPassword.fill(details.confirmPassword);
  }

  async submitForm() {
    await this.termsCheckbox.check();
    await this.continueButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toHaveText(
      'Your Account Has Been Created!'
    );
  }
}
