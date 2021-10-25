import { ChangeEvent, useCallback, useState } from 'react';

import { searchUser } from '../../../../../network/http/user';
import { ResUserBaseInfo } from '../../../../../network/http/userType';

export default function useSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [searchUsers, setSearchUsers] = useState<ResUserBaseInfo[]>([]);

  const changeSearchValue = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const search = async () => {
    if (searchValue === "") return;
    const users = await searchUser({ name: searchValue, page: 0 });
    setSearchUsers(users || []);
  };

  return { searchValue, search, changeSearchValue, searchUsers };
}
