import { useState } from 'react';

import { Tab, Tabs } from '@material-ui/core';

import Dialog from '../../../Dialog';
import ChangeInfo from '../ChangeInfo';
import ChangePassword from '../ChangePassword';

export default function DialogUpdateInfo({
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
          <Tab label="修改信息" className="login_page-tab" />
          <Tab label="修改密码" className="login_page-tab" />
        </Tabs>
        {value ? (
          <ChangePassword hideDialog={hideDialog} />
        ) : (
          <ChangeInfo hideDialog={hideDialog} />
        )}
      </>
    </Dialog>
  );
}
