import React from "react";
import { TextField } from "@material-ui/core";
import "./index.scss";

export interface InputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  front?: JSX.Element;
  end?: JSX.Element;
  multiline?: boolean;
  type?: string;
}

export default function Input(props: InputProps) {
  const {
    value,
    onChange,
    front,
    end,
    multiline = true,
    type = "text",
  } = props;
  return (
    <div className="input">
      <div className="input-front">{front ? front : false}</div>
      <TextField
        className="input-content"
        multiline={multiline}
        type={type}
        maxRows={4}
        value={value}
        onChange={onChange}
      />
      <div className="input-end">{end ? end : false}</div>
    </div>
  );
}
