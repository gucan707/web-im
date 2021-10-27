import './index.scss';

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Application from '../../components/Application';
import Aside from '../../components/Aside';
import ChatContent from '../../components/ChatContent';

export default function Chat() {
  let { pathname } = useLocation();

  return (
    <div className="chat_page">
      <Aside />
      {pathname === "/applyForFriend" || pathname === "/applyForGroup" ? (
        <Application pathname={pathname} />
      ) : (
        <ChatContent />
      )}
    </div>
  );
}
