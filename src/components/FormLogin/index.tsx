import './index.scss';

import LoadingButton from '@mui/lab/LoadingButton';

import Input from '../Input';
import useSetup from './hooks/useSetup';

export default function FormLogin() {
  const { changeForm, form, loading, login } = useSetup();

  return (
    <div className="form_login">
      <div className="form_login-input">
        <div className="form_login-input-key">用户名</div>
        <Input
          value={form.username}
          onChange={(e) => changeForm({ e, key: "username" })}
          multiline={false}
        />
      </div>
      <div className="form_login-input">
        <div className="form_login-input-key">密码</div>
        <Input
          value={form.password}
          onChange={(e) => changeForm({ e, key: "password" })}
          multiline={false}
          type="password"
        />
      </div>
      <LoadingButton
        variant="outlined"
        className="form_login-btn"
        loading={loading}
        onClick={login}
      >
        登录
      </LoadingButton>
    </div>
  );
}
