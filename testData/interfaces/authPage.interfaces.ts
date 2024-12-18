export interface IPersonalDetailsRegister {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  fax: string;
}

export interface IAddressDetails {
  company: string;
  address1: string;
  address2?: string;
  country: string;
  city: string;
  postcode: string;
  state: string;
}

export interface IRegisterDetails {
  loginName: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginDetails {
  loginName: string;
  password: string;
}
