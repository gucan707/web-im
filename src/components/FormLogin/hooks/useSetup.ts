import useForm from '../../../hooks/useForm';
import useLogin from './useLogin';

export default function useSetup() {
  const { allowed, changeForm, form } = useForm("login");
  const { loading, login } = useLogin({ form, allowed });

  return { form, changeForm, loading, login };
}
