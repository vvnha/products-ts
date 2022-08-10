import { ListResponse } from 'models';
import axiosClient from './axiosClient';

export const deleteData = (resource: string, id: string | number): Promise<any> => {
  const url = `/${resource}/${id}`;

  return axiosClient.delete(url);
};

export const putData = (resource: string, data: any): Promise<any> => {
  const url = `/${resource}/${data.id}`;

  return axiosClient.put(url, data);
};

export const postData = (resource: string, data: any): Promise<any> => {
  const url = `/${resource}`;

  return axiosClient.post(url, data);
};

export const getDataById = (resource: string, id: string | number): Promise<any> => {
  const url = `/${resource}/${id}`;

  return axiosClient.get(url);
};

export const getDataBySearch = (resource: string, params: any): Promise<ListResponse<any>> => {
  const url = `/${resource}`;

  return axiosClient.get(url, { params });
};

export const getData = (resource: string, params: any): Promise<ListResponse<any>> => {
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
