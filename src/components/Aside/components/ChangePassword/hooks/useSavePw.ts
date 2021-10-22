import { useCallback, useState } from 'react';
import sha256 from 'sha256';

import { Form, FormAllowed } from '../../../../../hooks/useForm';
import { updatePw, updateUserInfo } from '../../../../../network/http/user';
import { addToast } from '../../../../../utils/addToast';

type ChangeInfoParams = {
  allowed: FormAllowed;
  form: Form;
  oldPw: string;
  confirmPw: string;
  hideDialog: Function;
};

export default function useSavePw({
  allowed,
  form,
  oldPw,
  confirmPw,
  hideDialog,
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
    const res = await updatePw({
      newPassword: sha256(confirmPw),
      password: sha256(oldPw),
    });
    if (res) {
      addToast({
        value: "修改成功",
        severity: "success",
      });
      setLoading(false);
      hideDialog();
    } else {
      setLoading(false);
    }
  }, [loading, allowed, confirmPw, oldPw, form]);

  return { savePw, loading };
}
