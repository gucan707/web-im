import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { nicknameValidator, passwordValidator, usernameValidator } from '../utils/validators';
import { useAppSelector } from './useAppSelector';

const initialFormState = {
  username: "",
  nickname: "",
  password: "",
};

export type Form = typeof initialFormState;
export type FormAllowed = {
  [K in keyof Form]: boolean;
};

const initialAllowedState: FormAllowed = {
  username: false,
  nickname: false,
  password: false,
};

export type changeFormParams = {
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
  key: "username" | "nickname" | "password";
};

export default function useForm(
  purpose: "register" | "login" | "changeInfo" | "changePw"
) {
  const [form, setForm] = useState(initialFormState);
  const [avatar, setAvatar] = useState("");
  const [allowed, setAllowed] = useState(initialAllowedState);
  const userInfo = useAppSelector((state) => state.userInfoReducer.user);

  const changeForm = useCallback(
    ({ e, key }: changeFormParams) => {
      const newForm = { ...form };
      newForm[key] = e.target.value;
      setForm(newForm);
    },
    [form]
  );

  const checkAllowed = useCallback(async () => {
    const { nickname, password, username } = form;
    const newAllowed = { ...initialAllowedState };

    newAllowed.username =
      purpose === "changeInfo" ||
      purpose === "changePw" ||
      !(await usernameValidator(username));
    newAllowed.nickname =
      purpose === "login" ||
      purpose === "changePw" ||
      !(await nicknameValidator(nickname));
    newAllowed.password =
      purpose === "changeInfo" || !(await passwordValidator(password));

    setAllowed(newAllowed);
  }, [form, purpose]);

  useEffect(() => {
    checkAllowed();
  }, [form]);

  useEffect(() => {
    if (purpose !== "changeInfo") return;
    setForm({ ...userInfo, password: "" });
  }, [purpose, userInfo]);

  return { form, changeForm, allowed, avatar, setAvatar };
}
