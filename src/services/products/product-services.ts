import API from '../../helpers/api';

export const createProduct = (data: object) => API.post('products', data);

export const getAllProduct = (params: object) => API.get('products', params);

export const getProduct = (productId: string | number) => API.getById('products', productId);

export const getProductByCode = (productCode: string) =>
  API.getBySearch('products', { search: productCode });

export const updateProduct = (data: object) => API.put('products', data);

export const deleteProduct = (productId: string | number) => API.delete('products', productId);
