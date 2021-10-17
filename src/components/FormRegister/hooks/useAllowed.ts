import { useCallback, useState } from 'react';

import { nicknameValidator, passwordValidator, usernameValidator } from '../../../utils/validators';

export default function useAllowed() {
  const [allowed, setAllowed] = useState([false, false, false]);

  const checkAllowed = useCallback(
    async (form: { username: string; password: string; nickname: string }) => {
      const { nickname, password, username } = form;
      const newAllowed: boolean[] = [];

      newAllowed[0] = !(await usernameValidator(username));
      newAllowed[1] = !(await nicknameValidator(nickname));
      newAllowed[2] = !(await passwordValidator(password));

      setAllowed(newAllowed);
    },
    []
  );

  return { allowed, checkAllowed };
}
