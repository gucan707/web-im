import { useEffect, useState } from 'react';

import { confirmApplyForFriend, getApplyForFriend } from '../../../network/http/user';
import { ApplyState, ReqApplyForFriend, ResApplyForFriend } from '../../../network/http/userType';
import { addToast } from '../../../utils/addToast';

export type onConfirmApplyForFriendParams = {
  _id: string;
  confirm: boolean;
};

export default function useApplyForFriend(disabled: boolean) {
  const [applyForFriend, setApplyForFriend] = useState<ResApplyForFriend>([]);

  const onGetApplyForFriend = async () => {
    const applications = await getApplyForFriend();
    if (applications) setApplyForFriend(applications);
  };

  useEffect(() => {
    if (disabled) return;
    onGetApplyForFriend();
  }, [disabled]);

  const onConfirmApplyForFriend = async (
    reply: onConfirmApplyForFriendParams
  ) => {
    const applications = [...applyForFriend];
    const application = applications.find(
      (application) => application._id === reply._id
    );
    if (!application) {
      addToast({ value: "申请不存在，请尝试刷新页面", severity: "error" });
      return;
    }
    const ret = await confirmApplyForFriend({
      applicantId: application.user._id,
      confirm: reply.confirm,
    });
    if (ret) {
      application.state = reply.confirm
        ? ApplyState.resolve
        : ApplyState.reject;
      setApplyForFriend(applications);
      addToast({
        value: `${reply.confirm ? "已同意" : "已拒绝"}`,
        severity: "success",
      });
    }
  };

  return { applyForFriend, onConfirmApplyForFriend };
}
