import './index.scss';

import { useState } from 'react';

type DialogProps = {
  children: JSX.Element;
};

export default function Dialog(props: DialogProps) {
  const { children } = props;

  return (
    <div className="dialog">
      <div className="dialog-content">{children}</div>
    </div>
  );
}
