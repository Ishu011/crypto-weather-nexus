import { io } from "socket.io-client";

const SOCKET_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade"; 

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
});
