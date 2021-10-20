import './index.scss';

import { useState } from 'react';

import { LoadingButton } from '@mui/lab';

import photo from '../../../../assets/img/photo.jpeg';
import Input from '../../../Input';
import useSetup from './hooks/useSetup';

export default function ChangeInfo({ hideDialog }: { hideDialog: Function }) {
  const { changeForm, saveBaseInfo, setAvatar, form, loading } =
    useSetup(hideDialog);
  return (
    <div className="change_info">
      <div className="change_info-avatar">
        <img src={photo} alt="" className="change_info-avatar-img" />
        <div className="change_info-avatar-btn">修改头像</div>
      </div>
      <div className="change_info-input">
        <div className="change_info-input-key">昵称</div>
        <Input
          value={form.nickname}
          onChange={(e) => changeForm({ e, key: "nickname" })}
          multiline={false}
        />
      </div>
      <LoadingButton
        variant="outlined"
        className="change_info-btn"
        loading={loading}
        onClick={saveBaseInfo}
      >
        确认修改
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        className="change_info-btn"
        onClick={() => {
          hideDialog();
        }}
      >
        取消
      </LoadingButton>
    </div>
  );
}
