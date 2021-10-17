import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import useAllowed from './useAllowed';

const initialState = {
  username: "",
  nickname: "",
  password: "",
};

export type FormRegister = typeof initialState;

export type changeFormParams = {
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
  key: "username" | "nickname" | "password";
};

export default function useForm(
  checkAllowed: ReturnType<typeof useAllowed>["checkAllowed"]
) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    checkAllowed(form);
  }, [form]);

  const changeForm = useCallback(({ e, key }: changeFormParams) => {
    const newForm = { ...form };
    newForm[key] = e.target.value;
    setForm(newForm);
  }, []);

  return { form, changeForm };
}
