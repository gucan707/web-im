import { ChangeEvent, useCallback, useState } from 'react';

import { searchUser } from '../../../../../network/http/user';
import { ResSearchUser } from '../../../../../network/http/userType';

export default function useSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [searchUsers, setSearchUsers] = useState<ResSearchUser>([]);

  const changeSearchValue = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const search = useCallback(async () => {
    if (searchValue === "") return;
    const users = await searchUser({ name: searchValue, page: 0 });

    setSearchUsers(users || []);
  }, [searchValue]);

  return { searchValue, search, changeSearchValue, searchUsers };
}
