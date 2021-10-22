import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { getUserInfoById } from '../network/http/user';
import { ResUserBaseInfo } from '../network/http/userType';
import { changeUserInfo } from '../redux/userInfo/userInfoSlice';
import { useAppDispatch } from './useAppDispatch';

export default function useSaveUserInfo() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem("GChat-token");
    const _id = window.localStorage.getItem("GChat-_id");
    if (location.pathname === "/login" && token && _id) {
      history.push("/");
      return;
    } else if (location.pathname === "/login") return;
    saveUserInfo(token, _id);
  }, [location]);

  const saveUserInfo = useCallback(
    async (token: string | null, _id: string | null) => {
      if (token && _id) {
        const info = await getUserInfoById({ _id });
        if (info) {
          console.log({ info });
          dispatch(changeUserInfo({ ...info, _id }));
        }
      } else history.push("/login");
    },
    []
  );
}
