import './App.scss';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import loadable from '@loadable/component';

import Toasts from './components/Toasts';
import useSaveUserInfo from './hooks/useSaveUserInfo';
import { setupSocket } from './network/socket';

const ChatPage = loadable(() => import("./page/Chat"));
const LoginPage = loadable(() => import("./page/Login"));

function App() {
  useSaveUserInfo();
  useEffect(() => {
    setupSocket();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/:chatroom" component={ChatPage}></Route>
        <Route path="/" component={ChatPage}></Route>
      </Switch>
      <Toasts />
    </div>
  );
}

export default App;
