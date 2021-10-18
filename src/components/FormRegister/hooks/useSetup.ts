import useForm from '../../../hooks/useForm';
import useRegister from './useRegister';

export default function useSetup() {
  const { allowed, changeForm, form } = useForm("register");
  const { loading, register } = useRegister({ form, allowed });

  return { form, changeForm, allowed, loading, register };
}
