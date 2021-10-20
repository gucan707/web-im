import { useCallback, useState } from 'react';

export enum Dialog {
  none = "",
  updateInfo = "更新用户信息",
  logout = "退出登录",
  addRelation = "添加好友/群组",
  createGroup = "创建群聊",
}

export default function useShowDialog() {
  const [dialog, setDialog] = useState<Dialog>(Dialog.none);

  const hideDialog = useCallback(() => setDialog(Dialog.none), []);

  return { dialog, setDialog, hideDialog };
}
