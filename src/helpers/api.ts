import axiosClient from './axiosClient';

export const deleteData = (resource: string, productId: string | number) => {
  const url = `/${resource}/${productId}`;

  return axiosClient.delete(url);
};

export const putData = (resource: string, data: any) => {
  const url = `/${resource}/${data.id}`;

  return axiosClient.put(url, data);
};

export const postData = (resource: string, data: any) => {
  const url = `/${resource}`;

  return axiosClient.post(url, data);
};

export const getDataById = (resource: string, productId: string | number) => {
  const url = `/${resource}/${productId}`;

  return axiosClient.get(url);
};

export const getDataBySearch = (resource: string, params: any) => {
  const url = `/${resource}`;

  return axiosClient.get(url, { params });
};

export const getData = (resource: string, params: any) => {
  const url = `/${resource}`;

  return axiosClient.get(url, { params });
};

const API = {
  get: getData,
  getById: getDataById,
  post: postData,
  put: putData,
  delete: deleteData,
  getBySearch: getDataBySearch,
};

export default API;
