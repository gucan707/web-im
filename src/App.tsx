import './App.scss';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';

import Toasts from './components/Toasts';
import { useAddToast } from './hooks/useAddToast';
import { useAppDispatch } from './hooks/useAppDispatch';
import { addToast } from './redux/toasts/toastsSlice';

const ChatPage = loadable(() => import("./page/Chat"));
const LoginPage = loadable(() => import("./page/Login"));

function App() {
  const { addToastFn } = useAddToast();
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/" component={ChatPage}></Route>
      </Switch>
      <Toasts />
      <button
        onClick={() => {
          addToastFn({
            value: Math.random() > 0.7 ? "1 01 ".repeat(20) : "12312312",
            severity: "error",
          });
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
