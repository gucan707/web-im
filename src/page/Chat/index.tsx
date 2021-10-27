import './index.scss';

import { useEffect, useState } from 'react';

import Application from '../../components/Application';
import Aside from '../../components/Aside';
import ChatContent from '../../components/ChatContent';

export default function Chat() {
  return (
    <div className="chat_page">
      <Aside />
      {/* <ChatContent /> */}
      <Application />
    </div>
  );
}
