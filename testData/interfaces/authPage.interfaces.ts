interface IPersonalDetailsRegister {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  fax: string;
}

interface IAddressDetails {
  company: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
}

interface ILoginDetails {
  loginName: string;
  password: string;
  confirmPassword: string;
}
