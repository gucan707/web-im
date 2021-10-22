import { nanoid } from '@reduxjs/toolkit';

import { store } from '../redux/store';
import { addToast as add, removeToast } from '../redux/toasts/toastsSlice';

// Omit：除了 _id 都要
// Parameters 接收一个函数，返回这个函数的参数类型(数组)
export type AddToastParams = Omit<Parameters<typeof add>[0], "_id">;

export const addToast = (payload: AddToastParams) => {
  const _id = nanoid();
  store.dispatch(add({ ...payload, _id }));

  setTimeout(() => {
    store.dispatch(removeToast(_id));
  }, 1800);
};
