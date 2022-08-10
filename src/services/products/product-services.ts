import { ListResponse, Product } from 'models';
import API from '../../helpers/api';

export const createProduct = (data: Partial<Product>): Promise<Product> =>
  API.post('products', data);

export const getAllProduct = (params: object) => API.get('products', params);

export const getProduct = (productId: string | number) => API.getById('products', productId);

export const getProductByCode = (productCode: string): Promise<ListResponse<Product>> =>
  API.getBySearch('products', { search: productCode });

export const updateProduct = (data: Partial<Product>): Promise<Product> =>
  API.put('products', data);

export const deleteProduct = (productId: string | number): Promise<any> =>
  API.delete('products', productId);
