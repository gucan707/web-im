import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sha256 from 'sha256';

import { Form, FormAllowed } from '../../../hooks/useForm';
import { createUser } from '../../../network/http/user';
import { addToast } from '../../../utils/addToast';

type RegisterParams = {
  allowed: FormAllowed;
  form: Form;
};

export default function useRegister(params: RegisterParams) {
  const { allowed, form } = params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const register = useCallback(async () => {
    if (loading) return;
    if (Object.values(allowed).some((isAllowed) => !isAllowed)) {
      addToast({
        value: "信息填写有误",
        severity: "error",
      });
      return;
    }
    setLoading(true);

    const info = await createUser({
      ...form,
      password: sha256(form.password),
    });
    setLoading(false);
    if (info) {
      window.localStorage.setItem("GChat-token", info.token);
      window.localStorage.setItem("GChat-id", info.id);
      addToast({ value: "注册成功", severity: "success" });
      history.push("/");
    }
  }, [loading, allowed, form]);

  return { loading, register };
}
