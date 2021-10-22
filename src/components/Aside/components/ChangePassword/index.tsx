import './index.scss';

import { useState } from 'react';

import { LoadingButton } from '@mui/lab';

import Input from '../../../Input';
import useSetup from './hooks/useSetup';

export default function ChangePassword({
  hideDialog,
}: {
  hideDialog: Function;
}) {
  const {
    changeForm,
    form,
    changeConfirmPw,
    confirmPw,
    changeOldPw,
    oldPw,
    loading,
    savePw,
  } = useSetup({ hideDialog });

  return (
    <div className="change_password">
      {/* 避免浏览器自动填充用户名到其他搜索框中 */}
      <input
        type="text"
        style={{ position: "absolute", clipPath: "polygon(0 0, 0 0, 0 0)" }}
      />
      <div className="change_password-input">
        <div className="change_password-input-key">旧密码</div>
        <Input
          value={oldPw}
          onChange={changeOldPw}
          multiline={false}
          type="password"
          autoComplete="off"
        />
      </div>
      <div className="change_password-input">
        <div className="change_password-input-key">新密码</div>
        <Input
          value={form.password}
          onChange={(e) => changeForm({ e, key: "password" })}
          multiline={false}
          type="password"
          autoComplete="off"
        />
      </div>
      <div className="change_password-input">
        <div className="change_password-input-key">确认新密码</div>
        <Input
          value={confirmPw}
          onChange={changeConfirmPw}
          multiline={false}
          type="password"
          autoComplete="off"
        />
      </div>
      <LoadingButton
        variant="outlined"
        className="change_info-btn"
        loading={loading}
        onClick={savePw}
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
