export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: PriceType;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  bestseller: boolean;
  createdAt: string;
  updatedAt: string;
  colors: string[];
  productId: string;
}

export interface PriceType {
  current: number;
  discount: number;
}

export interface CategoryType {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface RegisterUserType {
  name: string;
  email: string;
  password: string;
}

export interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
