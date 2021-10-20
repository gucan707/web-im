import { ChangeEvent, useCallback, useState } from 'react';

export default function useOldPw() {
  const [oldPw, setOldPw] = useState("");

  const changeOldPw = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setOldPw(e.target.value);
    },
    []
  );

  return { oldPw, changeOldPw };
}
