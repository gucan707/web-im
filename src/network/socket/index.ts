import { io } from 'socket.io-client';

import { SOCKET_SERVER } from '../../constant/socket';
import { WsMessage } from '../../models/socket';

export const socket = io(SOCKET_SERVER);

const { joinRoom, receiveMessage, sendMessage } = WsMessage;

export const setupSocket = () => {
  socket.on("connection", () => {
    console.log("#ws connected");
  });

  socket.on(sendMessage, console.log);
  socket.on(receiveMessage, console.log);
};

export const socketJoinRoom = (roomNumber: string) => {
  console.log({ roomNumber });

  socket.emit(joinRoom, roomNumber);
};
