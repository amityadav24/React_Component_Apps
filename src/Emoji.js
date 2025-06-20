import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

const emojis = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','⚡'];

function Emoji() {
  const [Text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const addEmoji = (emoji) => {
    setText(Text + emoji);
  };

  const handleSend = () => {
    if (Text.trim() !== "") {
      setMessages([...messages, Text]);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center p-6">
      <div className="bg-white border-2 border-blue-400 shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">💬 Emoji Chat Box</h2>

        {/* Input with send button */}
        <div className="relative mb-4">
          <input
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 border-2 border-blue-300 rounded-xl focus:outline-none text-lg"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
          >
            <IoSend size={20} />
          </button>
        </div>

        {/* Emoji Grid */}
        <div className="grid grid-cols-6 gap-2 bg-blue-100 border border-blue-300 p-3 rounded-xl max-h-40 overflow-y-auto mb-4">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => addEmoji(emoji)}
              className="text-xl hover:scale-110 transition-transform duration-150"
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Message History */}
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-blue-200 text-blue-900 px-4 py-2 rounded-xl shadow-sm border border-blue-300"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Emoji;
