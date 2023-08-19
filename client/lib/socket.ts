import { io } from "socket.io-client";

const url = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:8000";

export const socket = io(url);
