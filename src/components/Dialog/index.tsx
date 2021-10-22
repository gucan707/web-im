import './index.scss';

import { useState } from 'react';

type DialogProps = {
  children: JSX.Element;
  className?: string;
};

export default function Dialog(props: DialogProps) {
  const { children, className } = props;

  return (
    <div className="dialog">
      <div className={"dialog-content" + ` ${className}`}>{children}</div>
    </div>
  );
}
