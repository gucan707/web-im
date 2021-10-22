import { useCallback, useState } from 'react';

import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { Form, FormAllowed } from '../../../../../hooks/useForm';
import { updateUserInfo } from '../../../../../network/http/user';
import { changeUserInfo } from '../../../../../redux/userInfo/userInfoSlice';
import { addToast } from '../../../../../utils/addToast';

type ChangeInfoParams = {
  allowed: FormAllowed;
  form: Form;
  avatar: string;
  hideDialog: Function;
};

export default function useChangeInfo({
  allowed,
  form,
  avatar,
  hideDialog,
}: ChangeInfoParams) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const saveBaseInfo = useCallback(async () => {
    if (loading) return;
    if (Object.values(allowed).some((isAllowed) => !isAllowed)) {
      addToast({
        value: "信息填写有误",
        severity: "error",
      });
      return;
    }
    setLoading(true);
    const res = await updateUserInfo({ ...form, avatar });
    if (res) {
      // await dispatch(changeUserInfo({ ...form, avatar }))
      addToast({
        value: "修改成功",
        severity: "success",
      });
      setLoading(false);
      hideDialog();
    } else {
      setLoading(false);
    }
  }, [loading, allowed]);

  return { saveBaseInfo, loading };
}
