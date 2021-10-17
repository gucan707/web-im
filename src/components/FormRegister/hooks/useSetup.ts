import useAllowed from './useAllowed';
import useForm from './useForm';
import useRegister from './useRegister';

export default function useSetup() {
  const { allowed, checkAllowed } = useAllowed();
  const { form, changeForm } = useForm(checkAllowed);
  const { loading, register } = useRegister({ form, allowed });

  return { form, changeForm, allowed, loading, register };
}
