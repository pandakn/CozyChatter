import { Server, Socket } from "socket.io";
import { IJoinRoom, IMessage } from "../interfaces/socket";

export const initializeSocketIO = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join-room", (data: IJoinRoom) => {
      const { room } = data;
      socket.join(room);
      console.log(`User with ID: ${socket.id} joined room: ${room}`);
    });

    socket.on("send-message", (data: IMessage) => {
      const { room } = data;
      socket.to(room).emit("receive-message", data);
    });

    socket.on("typing", (data: { room: string; name: string }) => {
      const { room, name } = data;
      socket.to(room).emit("user-typing", { name });
    });

    socket.on("stop-typing", (data: { room: string }) => {
      const { room } = data;
      socket.to(room).emit("user-stopped-typing");
    });

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${socket.id}`);
    });
  });
};
