import { useState } from 'react';

import { Tab, Tabs } from '@material-ui/core';

import Dialog from '../../../Dialog';
import AddFriendNGroup from '../AddFriendNGroup';

export default function DialogAddRelation({
  hideDialog,
}: {
  hideDialog: Function;
}) {
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
        <AddFriendNGroup hideDialog={hideDialog} />
      </>
    </Dialog>
  );
}
