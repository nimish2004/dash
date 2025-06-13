import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Naru", text: "Welcome to the chat!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="flex-1 overflow-y-auto pl-64">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-black">Chat</h2>

      <div className="flex-1 overflow-y-auto bg-gray-100  p-4 rounded-lg mb-4 shadow-inner">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 max-w-sm p-2 rounded-lg ${
              msg.sender === "You"
                ? "bg-green-700 text-white self-end"
                : "bg-gray-300 dark:bg-green-700 text-black dark:text-white"
            }`}
          >
            <strong>{msg.sender}: </strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded border border-gray-300 dark:border-gray-600 bg-bla dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
