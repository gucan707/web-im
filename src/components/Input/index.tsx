import React from "react";
import { TextField } from "@material-ui/core";
import "./index.scss";

export interface InputProps {
  value: string;
  setValue: (value: string) => void;
  front?: JSX.Element;
  end?: JSX.Element;
}

export default function Input(props: InputProps) {
  const { value, setValue } = props;
  return (
    <div className="input">
      <div className="input-front"></div>
      <TextField
        className="input-content"
        multiline
        maxRows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="input-end"></div>
    </div>
  );
}
