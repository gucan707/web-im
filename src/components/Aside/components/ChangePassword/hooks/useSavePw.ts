import { useCallback, useState } from 'react';

import { Form, FormAllowed } from '../../../../../hooks/useForm';
import { updatePw, updateUserInfo } from '../../../../../network/http/user';
import { addToast } from '../../../../../utils/addToast';

type ChangeInfoParams = {
  allowed: FormAllowed;
  form: Form;
  oldPw: string;
  confirmPw: string;
};

export default function useSavePw({
  allowed,
  form,
  oldPw,
  confirmPw,
}: ChangeInfoParams) {
  const [loading, setLoading] = useState(false);

  const savePw = useCallback(async () => {
    if (loading) return;
    if (Object.values(allowed).some((isAllowed) => !isAllowed)) {
      addToast({
        value: "信息填写有误",
        severity: "error",
      });
      return;
    }
    if (form.password !== confirmPw) {
      addToast({
        value: "两次新密码填写不一致",
        severity: "error",
      });
      return;
    }
    setLoading(true);
    const res = await updatePw({ newPassword: confirmPw, password: oldPw });
    if (res)
      addToast({
        value: "修改成功",
        severity: "success",
      });
    setLoading(false);
  }, [loading, allowed]);

  return { savePw, loading };
}
