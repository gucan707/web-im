import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import sha256 from 'sha256';

import { Form, FormAllowed } from '../../../hooks/useForm';
import { login as loginReq } from '../../../network/http/user';
import { addToast } from '../../../utils/addToast';

type LoginParams = {
  allowed: FormAllowed;
  form: Form;
};

export default function useLogin(params: LoginParams) {
  const { allowed, form } = params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    if (loading) return;
    if (Object.values(allowed).some((isAllowed) => !isAllowed)) {
      addToast({
        value: "信息填写有误",
        severity: "error",
      });
      return;
    }
    setLoading(true);

    const info = await loginReq({
      username: form.username,
      password: sha256(form.password),
    });
    setLoading(false);
    if (info) {
      window.localStorage.setItem("GChat-token", info.token);
      window.localStorage.setItem("GChat-_id", info._id);
      addToast({ value: "登录成功", severity: "success" });
      history.push("/");
    }
  }, [loading, allowed, form]);

  return { loading, login };
}
