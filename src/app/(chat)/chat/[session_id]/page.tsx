"use client";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  time: string;
  sender: "user" | "bot";
  date?: string;
  source?: string;
}
const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello, I want to make enquiries about your product",
    time: "12:55 am",
    sender: "bot",
    date: "12 August 2022",
  },
  {
    id: 2,
    text: "How do I apply for admission?",
    time: "12:57 am",
    sender: "user",
  },
  {
    id: 3,
    text: "Submit an online application on the Admissions Portal, upload required documents, and pay the application fee. You'll receive a confirmation email with your applicant ID.",
    time: "12:55 am",
    sender: "bot",
    source: "Admissions Prospectus",
  },
  {
    id: 4,
    text: "Where is the Accounts Office and what are the hours?",
    time: "12:57 am",
    sender: "user",
    date: "Today",
  },
  {
    id: 5,
    text: "Administration Building, 2nd Floor, Room 204. Hours: Sun–Thu, 9:00–17:00.",
    time: "12:55 am",
    sender: "bot",
    source: "Admissions Prospectus",
  },
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue("");

    // Simulate a bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: `This is a simulated response to: "${inputValue}"`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sender: "bot",
        source: "Simulated Source",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };
  return (
    <div className="flex flex-col h-full bg-[#FBE6CE] rounded-xl">
      <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={msg.id}>
            {/* Date Label */}
            {msg.date && (
              <div className="text-center my-3">
                <span className="text-xs bg-[#F8E0C9] px-3 py-1 rounded-full text-gray-600 font-medium">
                  {msg.date}
                </span>
              </div>
            )}

            {/* Message */}
            <div
              className={`flex items-end mb-4 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar for bot */}
              

              <div>
                <div
                  className={`max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#F8E0C9] rounded-br-none"
                      : "bg-[#F8E0C9] rounded-bl-none"
                  }`}
                >
                  <p className="text-gray-800 text-sm">{msg.text}</p>
                  {msg.source && (
                    <p className="text-xs italic text-orange-500 mt-1">
                      Source: {msg.source}
                    </p>
                  )}
                </div>
                <p
                  className={`text-[11px] text-gray-500 mt-1 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {msg.time}
                </p>
              </div>

              {/* Avatar for user */}
              
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="border-t border-[#FADDBE]  p-4 flex items-center">
        <input
          type="text"
          placeholder="Ask anything"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          className="flex-1 px-4 py-2  border-[#FADDBE] rounded-full text-sm focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
