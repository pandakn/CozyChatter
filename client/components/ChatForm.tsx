import { SendHorizontal } from "lucide-react";
import React from "react";

type ChatFormProps = {
  handleSendMessage: (e: React.FormEvent) => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleTyping: () => void;
};

const ChatForm = ({
  message,
  setMessage,
  handleSendMessage,
  handleTyping,
}: ChatFormProps) => {
  return (
    <form
      onSubmit={handleSendMessage}
      className="flex items-center w-full mx-1 mt-4 mb-1 gap-x-2"
    >
      <input
        value={message}
        // className="flex flex-wrap border border-gray-900 "
        className="w-full input input-bordered"
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
          handleTyping();
        }}
      />
      <button
        disabled={message.length <= 0}
        onClick={handleSendMessage}
        className="mr-2 btn btn-active btn-neutral btn-square"
      >
        <SendHorizontal />
      </button>
    </form>
  );
};

export default ChatForm;
