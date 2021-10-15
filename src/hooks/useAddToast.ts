import { nanoid } from '@reduxjs/toolkit';

import { addToast, removeToast } from '../redux/toasts/toastsSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useAddToast = () => {
  const dispatch = useAppDispatch();
  const toastsState = useAppSelector((state) => state.toastsReducer.toasts);

  const addToastFn = (payload: Omit<Parameters<typeof addToast>[0], "id">) => {
    const id = nanoid();

    dispatch(addToast({ ...payload, id }));

    setTimeout(() => {
      dispatch(removeToast(id));
    }, 1800);
  };

  return { addToastFn };
};
