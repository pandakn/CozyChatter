import React from "react";
import Avatar from "./Avatar";

type ChatHeaderProps = {
  roomId: string;
  name: string;
};

const ChatHeader = ({ name, roomId }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-xl">Room: {roomId}</h1>
      <div className="flex items-center gap-x-2">
        <h3 className="text-lg font-semibold">@{name}</h3>
        <Avatar />
      </div>
    </header>
  );
};

export default ChatHeader;
