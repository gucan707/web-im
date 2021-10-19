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
    const id = window.localStorage.getItem("GChat-id");
    if (location.pathname === "/login" && token && id) {
      history.push("/");
      return;
    } else if (location.pathname === "/login") return;
    saveUserInfo(token, id);
  }, [location]);

  const saveUserInfo = useCallback(
    async (token: string | null, id: string | null) => {
      if (token && id) {
        const info = await getUserInfoById({ id });
        console.log({ info });
        if (info) {
          dispatch(changeUserInfo({ ...info, id }));
        }
      } else history.push("/login");
    },
    []
  );
}
