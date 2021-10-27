import { io } from 'socket.io-client';

import { SOCKET_SERVER } from '../../constant/socket';
import { WsMessage } from '../../models/socket';

export const socket = io(SOCKET_SERVER);

export const setupSocket = () => {
  socket.on("connection", () => {
    console.log("#ws connected");
  });

  socket.on(WsMessage.receiveMessage, console.log);
};
