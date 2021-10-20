import { ChangeEvent, useCallback, useState } from 'react';

export default function useConfirmPw() {
  const [confirmPw, setConfirmPw] = useState("");

  const changeConfirmPw = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setConfirmPw(e.target.value);
    },
    []
  );

  return { confirmPw, changeConfirmPw };
}
