import { LOCAL_TOKEN_KEY } from './constant';

export const getToken = () => {
  // FIXME: 自行处理此处获取 token
  return localStorage.getItem(LOCAL_TOKEN_KEY);
};

export const setToken = (value: string) => {
  localStorage.setItem(LOCAL_TOKEN_KEY, value);
};

export const clearToken = () => {
  localStorage.removeItem(LOCAL_TOKEN_KEY);
};
