import { faker } from '@faker-js/faker';

const personalDetails: IPersonalDetailsRegister = {
  firstName: faker.person.firstName('female'),
  lastName: faker.person.lastName('female'),
  email: faker.internet.email({ provider: 'liubov.test' }),
  telephone: faker.phone.number(),
  fax: faker.number.int({ min: 5, max: 10 }).toString(),
};

const addressDetails: IAddressDetails = {
  company: faker.company.catchPhraseAdjective(),
  address1: faker.location.streetAddress(),
  address2: faker.location.streetAddress({ useFullAddress: true }),
  city: faker.location.city(),
  state: '3513', //
  country: '222', //UK
  postcode: faker.location.zipCode(),
};
const _password = faker.internet.password({
  length: 8,
  memorable: true,
  pattern: /[A-Z]/,
  prefix: 'TEST',
});

const accountDetails: ILoginDetails = {
  loginName: faker.internet.username(),
  password: _password,
  confirmPassword: _password,
};

export { personalDetails, addressDetails, accountDetails };
