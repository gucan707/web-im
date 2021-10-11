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
