import { useAppSelector } from '../../../hooks/useAppSelector';
import useFriends from './useFriends';
import useShowDialog from './useShowDialog';
import useShowPopover from './useShowPopover';

export default function useSetup() {
  const userInfo = useAppSelector((state) => state.userInfoReducer);
  const { dialog, setDialog, hideDialog } = useShowDialog();
  const { popover, setPopover } = useShowPopover();
  const { friends, onAddFriend, onDelFriend, onGetFriendsList } = useFriends();

  return {
    userInfo,
    dialog,
    setDialog,
    hideDialog,
    popover,
    setPopover,
    friends,
    onAddFriend,
    onDelFriend,
    onGetFriendsList,
  };
}
