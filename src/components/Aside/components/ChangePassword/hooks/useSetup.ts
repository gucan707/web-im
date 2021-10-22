import useForm from '../../../../../hooks/useForm';
import useConfirmPw from './useConfirmPw';
import useOldPw from './useOldPw';
import useSavePw from './useSavePw';

export default function useSetup({ hideDialog }: { hideDialog: Function }) {
  const { allowed, form, changeForm } = useForm("changePw");
  const { confirmPw, changeConfirmPw } = useConfirmPw();
  const { oldPw, changeOldPw } = useOldPw();
  const { loading, savePw } = useSavePw({
    allowed,
    confirmPw,
    form,
    oldPw,
    hideDialog,
  });

  return {
    form,
    changeForm,
    confirmPw,
    changeConfirmPw,
    oldPw,
    changeOldPw,
    loading,
    savePw,
  };
}
