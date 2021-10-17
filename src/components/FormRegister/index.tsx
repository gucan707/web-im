import './index.scss';

import LoadingButton from '@mui/lab/LoadingButton';

import Input from '../Input';
import useSetup from './hooks/useSetup';

export default function FormRegister() {
  const { form, changeForm, allowed, loading, register } = useSetup();

  return (
    <div className="form_register">
      <div
        className={"form_register-input" + (allowed[0] ? "" : " error")}
        data-warning="用户名需在3~10字之间，仅能包含数字、大小写字母与下划线（_）"
      >
        <div className="form_register-input-key">用户名</div>
        <Input
          value={form.username}
          onChange={(e) => {
            changeForm({ e, key: "username" });
          }}
          multiline={false}
        />
      </div>
      <div
        className={"form_register-input" + (allowed[1] ? "" : " error")}
        data-warning="昵称需在3~10字之间"
      >
        <div className="form_register-input-key">昵称</div>
        <Input
          value={form.nickname}
          onChange={(e) => {
            changeForm({ e, key: "nickname" });
          }}
          multiline={false}
        />
      </div>
      <div
        className={"form_register-input" + (allowed[2] ? "" : " error")}
        data-warning="密码需在8~15字之间，仅能包含数字、大小写字母与下划线（_）"
      >
        <div className="form_register-input-key">密码</div>
        <Input
          value={form.password}
          onChange={(e) => {
            changeForm({ e, key: "password" });
          }}
          multiline={false}
          type="password"
        />
      </div>
      <LoadingButton
        variant="outlined"
        className="form_register-btn"
        loading={loading}
        onClick={register}
      >
        注册
      </LoadingButton>
    </div>
  );
}
