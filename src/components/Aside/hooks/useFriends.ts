import { useEffect, useState } from 'react';

import { addFriend, delFriend, getFriendsList } from '../../../network/http/user';
import { ReqId, ResFriendsList } from '../../../network/http/userType';
import { addToast } from '../../../utils/addToast';

export default function useFriends() {
  const [friends, setFriends] = useState<ResFriendsList>([]);

  const onGetFriendsList = async () => {
    const friends = await getFriendsList();
    setFriends(friends || []);
  };

  useEffect(() => {
    onGetFriendsList();
  }, []);

  const onAddFriend = async ({ _id }: ReqId) => {
    const applyMsg = await addFriend({ _id });
    if (applyMsg === undefined) {
      addToast({ value: "申请发送成功", severity: "success" });
    } else if (typeof applyMsg === "string") {
      addToast({ value: applyMsg, severity: "warning" });
    }
  };

  const onDelFriend = async ({ _id }: ReqId) => {
    const ret = await delFriend({ _id });
    if (ret) {
      const newLists = [...friends];
      newLists.splice(
        friends.findIndex((friend) => friend._id === _id),
        1
      );
      setFriends(newLists);
      addToast({ value: "删除成功", severity: "success" });
    }
  };

  return { friends, onGetFriendsList, onAddFriend, onDelFriend };
}
