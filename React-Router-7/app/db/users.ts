export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async (): Promise<IUser[]> => {
  const response = await fetch(`${BASE_URL}/users`);
  const users = (await response.json()) as IUser[];
  return users;
};

export const getUserById = async (userId: string): Promise<IUser> => {
  const response = await fetch(`${BASE_URL}/users/${userId}`);
  const user = (await response.json()) as IUser;
  return user;
};
