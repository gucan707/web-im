import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { nanoid } from '@reduxjs/toolkit';

import { store } from '../../redux/store';
import { addToast, removeToast } from '../../redux/toasts/toastsSlice';
import { responseType } from './responseType';

const SERVER_BASE_URL = "http://localhost:3030";

export default function _request<T = {}>(config: AxiosRequestConfig) {
  // const { addToastFn } = useAddToast();

  const instance = axios.create({
    baseURL: SERVER_BASE_URL,
    timeout: 60000,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem("GChat-token");
      config.headers = config.headers || {};
      config.headers.Authorization = token || "";
      return config;
    },
    (err) => {
      console.error(err);
    }
  );

  return new Promise<T | null>(async (resolve) => {
    try {
      const res = await instance.request<responseType<T>>(config);
      if (res.data && res.data.status === 200) {
        resolve(res.data.data);
      } else if (!res.data) {
        throw new Error("出错了！");
      } else {
        console.log(res.data);

        throw new Error(res.data.msg || "出错了！");
      }
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        const _id = nanoid();
        store.dispatch(
          addToast({ value: err.message, severity: "error", _id })
        );

        setTimeout(() => {
          store.dispatch(removeToast(_id));
        }, 1800);
      }

      resolve(null);
    }
  });
}
