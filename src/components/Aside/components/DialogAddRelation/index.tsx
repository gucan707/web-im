import { useState } from 'react';

import { Tab, Tabs } from '@material-ui/core';

import { ReqId, ResUserBaseInfo } from '../../../../network/http/userType';
import Dialog from '../../../Dialog';
import AddFriendNGroup from '../AddFriendNGroup';

export type DialogAddRelationProps = {
  hideDialog: Function;
  onAddFriend: ({ _id }: ReqId) => void;
  friends: ResUserBaseInfo[];
};

export default function DialogAddRelation({
  hideDialog,
  onAddFriend,
  friends,
}: DialogAddRelationProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Dialog>
      <>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="aside-dialog-tabs"
        >
          <Tab label="添加好友" />
          <Tab label="添加群聊" />
        </Tabs>
        <AddFriendNGroup
          hideDialog={hideDialog}
          onAddFriend={onAddFriend}
          friends={friends}
        />
      </>
    </Dialog>
  );
}
