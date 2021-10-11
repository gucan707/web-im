import { Button } from "@material-ui/core";
import { useState } from "react";
import Input from "../Input";

import "./index.scss";

const initialState = {
  username: "",
  password: "",
};

export default function FormLogin() {
  const [form, setForm] = useState(initialState);
  return (
    <div className="form_login">
      <div className="form_login-input">
        <div className="form_login-input-key">用户名</div>
        <Input
          value={form.username}
          setValue={(username) =>
            setForm({ username, password: form.password })
          }
          multiline={false}
        />
      </div>
      <div className="form_login-input">
        <div className="form_login-input-key">密码</div>
        <Input
          value={form.password}
          setValue={(password) =>
            setForm({ password, username: form.username })
          }
          multiline={false}
          type="password"
        />
      </div>
      <Button
        variant="outlined"
        className="form_login-btn"
        onClick={() => console.log(form)}
      >
        登录
      </Button>
    </div>
  );
}
