import React from "react";

type ChatTypingProps = {
  name: string;
};

const ChatTyping = ({ name }: ChatTypingProps) => {
  return (
    <div className="px-3 chat chat-start">
      <p className="chat-header">@{name}</p>
      <div className="flex px-3 opacity-50 chat-bubble">
        <p>typing</p>
        <span className="ml-1 loading loading-dots loading-sm"></span>
      </div>
    </div>
  );
};

export default ChatTyping;
