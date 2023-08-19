import React from "react";

type BubbleChatProps = {
  socketId: string;
  msgId: string;
  name: string;
  message: string;
  sentAt: string;
};

const BubbleChat = ({
  socketId,
  msgId,
  message,
  name,
  sentAt,
}: BubbleChatProps) => {
  return (
    <div
      className={`chat  text-start mt-4 px-3 ${
        msgId === socketId ? "chat-end" : "chat-start"
      }`}
      key={msgId}
    >
      <p className="chat-header">@{name}</p>
      <p className="max-w-[300px] text-xl break-words chat-bubble">{message}</p>
      <p className="opacity-50 chat-footer">{sentAt}</p>
    </div>
  );
};

export default BubbleChat;
