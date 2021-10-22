import './index.scss';

import React from 'react';

import { TextField } from '@material-ui/core';

export interface InputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  front?: JSX.Element;
  end?: JSX.Element;
  multiline?: boolean;
  type?: string;
  autoComplete?: string;
}

export default function Input(props: InputProps) {
  const {
    value,
    onChange,
    front,
    end,
    multiline = true,
    type = "text",
    autoComplete = "on",
  } = props;
  return (
    <div className="input">
      {front && <div className="input-front">{front}</div>}
      <TextField
        className="input-content"
        multiline={multiline}
        type={type}
        maxRows={4}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {end && <div className="input-end">{end}</div>}
    </div>
  );
}
