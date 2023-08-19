"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { socket } from "@/lib/socket";

const FormJoinRoom = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      const data = { room, name };
      socket.emit("join-room", data);
      name && localStorage.setItem("name", name);
      setIsRedirect(true);
    }
  };

  useEffect(() => {
    localStorage.removeItem("name");
  }, []);

  isRedirect && redirect(`/room/${room}`);

  return (
    <form className="rounded-lg form-control gap-y-4">
      <div className="flex items-center gap-x-2">
        <label htmlFor="name">Name</label>
        <input
          required
          className="w-full input input-bordered"
          placeholder="Your name..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-x-2">
        <label htmlFor="room">Room</label>
        <input
          required
          className="w-full input input-bordered"
          placeholder="Room Number..."
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
      </div>
      <button onClick={joinRoom} className=" btn btn-neutral">
        Join Room
      </button>
    </form>
  );
};

export default FormJoinRoom;
