export interface Product {
  createdAt?: string;
  name: string;
  code: string;
  category: string;
  brand: string;
  type: string;
  price: number;
  description: string;
  readonly id: string | number;
}

export interface ProductFormValue {
  createdAt?: string;
  name: string;
  code: string;
  category: string;
  brand: string;
  type: string;
  price: number | string;
  description: string;
  id?: string | number;
}
