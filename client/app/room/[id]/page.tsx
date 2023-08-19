"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { socket } from "@/lib/socket";

// components
import ScrollToBottom from "react-scroll-to-bottom";
import BubbleChat from "@/components/BubbleChat";
import ChatTyping from "@/components/ChatTyping";
import ChatForm from "@/components/ChatForm";

// types
import { Message } from "@/types/message";

// utils
import { formatDate } from "@/lib/formatDate";
import ChatHeader from "@/components/ChatHeader";

type RoomIdProps = {
  params: { id: string };
};

type WhoTyping = {
  name: string;
};

const RoomId = ({ params }: RoomIdProps) => {
  const { id } = params;
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [roomMessages, setRoomMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [whoTyping, setWhoTyping] = useState<WhoTyping>({ name: "" });

  const handleTyping = () => {
    if (message.trim().length > 1) {
      socket.emit("typing", { room: id, name });
    } else {
      socket.emit("stop-typing", { room: id });
    }
  };

  useEffect(() => {
    const userName = localStorage.getItem("name");
    userName && setName(userName);

    socket.on("receive-message", (data) => {
      setRoomMessages((prev) => [...prev, data]);
    });

    socket.on("user-typing", (data) => {
      setWhoTyping({ name: data.name });
      setIsTyping(true);
    });

    socket.on("user-stopped-typing", () => {
      console.log("stop tying");

      setIsTyping(false);
    });

    return () => {
      socket.off("receive-message");
      socket.off("user-typing");
      socket.off("user-stopped-typing");
    };
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const dateObject = new Date();
    const timeString = formatDate(dateObject);
    socket.emit("stop-typing", { room: id });
    const data = { id: socket.id, message, room: id, name, sentAt: timeString };
    setMessage("");
    socket.emit("send-message", data);
    setRoomMessages((prev) => [...prev, data]);
  };

  return (
    <>
      <div className="border border-gray-900 rounded-2xl">
        <ChatHeader name={name} roomId={id} />
        <hr />
        <div className="chat-body">
          {roomMessages.length <= 0 ? (
            <p className="absolute transform -translate-x-1/2 -translate-y-1/2 opacity-30 md:text-xl top-1/2 left-1/2">
              {"Hey! Let's chat!"}
            </p>
          ) : (
            <ScrollToBottom className="message-container">
              {roomMessages.map((msg) => (
                <BubbleChat
                  key={msg.id}
                  socketId={socket.id}
                  msgId={msg.id}
                  name={msg.name}
                  message={msg.message}
                  sentAt={msg.sentAt}
                />
              ))}
              {isTyping && <ChatTyping name={whoTyping.name} />}
            </ScrollToBottom>
          )}
        </div>

        <ChatForm
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          handleTyping={handleTyping}
        />
      </div>

      <button>
        <Link href="/" className="mt-4 btn btn-outline">
          Back home
        </Link>
      </button>
    </>
  );
};

export default RoomId;
