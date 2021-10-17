import './index.scss';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import sha256 from 'sha256';

import LoadingButton from '@mui/lab/LoadingButton';

import { login } from '../../network/http/user';
import { addToast } from '../../utils/addToast';
import { passwordValidator, setValidator, usernameValidator } from '../../utils/validators';
import Input from '../Input';

const initialState = {
  username: "",
  password: "",
};

export default function FormLogin() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <div className="form_login">
      <div className="form_login-input">
        <div className="form_login-input-key">用户名</div>
        <Input
          value={form.username}
          onChange={(e) =>
            setForm({ username: e.target.value, password: form.password })
          }
          multiline={false}
        />
      </div>
      <div className="form_login-input">
        <div className="form_login-input-key">密码</div>
        <Input
          value={form.password}
          onChange={(e) =>
            setForm({ password: e.target.value, username: form.username })
          }
          multiline={false}
          type="password"
        />
      </div>
      <LoadingButton
        variant="outlined"
        className="form_login-btn"
        loading={loading}
        onClick={async () => {
          if (loading) return;

          setLoading(true);

          const usernameRes = await setValidator(
            usernameValidator,
            form.username
          );
          const passwordRes = await setValidator(
            passwordValidator,
            form.password
          );
          if (usernameRes || passwordRes) return;

          const info = await login({
            ...form,
            password: sha256(form.password),
          });
          setLoading(false);

          if (info) {
            window.localStorage.setItem("GChat-token", info.token);
            window.localStorage.setItem("GChat-id", info.id);
            addToast({ value: "登录成功", severity: "success" });
            history.push("/");
          }
        }}
      >
        登录
      </LoadingButton>
    </div>
  );
}
