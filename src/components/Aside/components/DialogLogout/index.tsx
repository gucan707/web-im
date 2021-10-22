import './index.scss';

import { useState } from 'react';
import { useHistory } from 'react-router';

import { LoadingButton } from '@mui/lab';

import Dialog from '../../../Dialog';

export default function DialogLogout({ hideDialog }: { hideDialog: Function }) {
  const history = useHistory();

  return (
    <Dialog className="logout-small">
      <>
        <div>确认退出？</div>
        <LoadingButton
          variant="outlined"
          onClick={() => {
            window.localStorage.removeItem("GChat-token");
            window.localStorage.removeItem("GChat-_id");
            history.push("/login");
          }}
        >
          确认
        </LoadingButton>
        <LoadingButton
          variant="outlined"
          onClick={() => {
            hideDialog();
          }}
        >
          取消
        </LoadingButton>
      </>
    </Dialog>
  );
}
