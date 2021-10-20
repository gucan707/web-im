import useForm from '../../../../../hooks/useForm';
import useChangeBaseInfo from './useChangeBaseInfo';

export default function useSetup(hideDialog: Function) {
  const { allowed, changeForm, form, avatar, setAvatar } =
    useForm("changeInfo");
  const { saveBaseInfo, loading } = useChangeBaseInfo({
    allowed,
    form,
    avatar,
    hideDialog,
  });
  return { changeForm, saveBaseInfo, setAvatar, form, loading };
}
