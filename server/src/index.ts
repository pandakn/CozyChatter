import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { initializeSocketIO } from "./utils/socket";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", process.env.ORIGIN],
    methods: ["GET", "POST"],
  },
});

initializeSocketIO(io);

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
