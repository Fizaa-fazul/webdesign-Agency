import React, { useState } from "react";
import "../style/chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I'm Webdesign company's AI assistant. Ask me anything!", from: "bot" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, from: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const botMessage = {
        text: data.reply,
        from: "bot"
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Error: AI not responding 😢", from: "bot" }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chat-box">

          <div className="chat-header">
            AI Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from}>
                {msg.text}
              </div>
            ))}

            {loading && <p className="bot">Typing...</p>}
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button onClick={handleSend}>Send</button>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;