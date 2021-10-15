import './index.scss';

import { useEffect, useState } from 'react';

import { Alert } from '@material-ui/core';

import { useAppSelector } from '../../hooks/useAppSelector';

export default function Toasts() {
  const toasts = useAppSelector((state) => state.toastsReducer.toasts);

  return (
    <div className="toasts">
      {toasts.map((toast) => (
        <Alert
          variant="outlined"
          severity={toast.severity}
          key={toast.id}
          className="toasts-toast"
        >
          {toast.value}
        </Alert>
      ))}
    </div>
  );
}
