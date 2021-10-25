import useSearch from './useSearch';

export default function useSetup() {
  const { search, searchValue, changeSearchValue, searchUsers } = useSearch();

  return { search, searchValue, changeSearchValue, searchUsers };
}
