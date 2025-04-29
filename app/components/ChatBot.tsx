"use client";
import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./chatStyles.css";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "assistant"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const scrollHeight = chatContainerRef.current.scrollHeight;
      chatContainerRef.current.scrollTop = scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setMessages((msgs) => [...msgs, { from: "user", text: trimmed }]);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await response.json();
      setMessages((msgs) => [
        ...msgs,
        { from: "assistant", text: data.reply },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { from: "assistant", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full sm:w-[400px] sm:h-[350px] md:w-[400px] h-[400px] mx-auto my-4 border border-blue-200 flex flex-col">
      <div 
        ref={chatContainerRef}
        className="flex-1 h-[350px] overflow-y-auto px-3 py-2 space-y-2 mb-2 flex flex-col custom-scrollbar"
      >
        <AnimatePresence>
          {messages.length === 0 && (
            <div className="text-center text-blue-200 mt-3 text-sm">
              Send a message to start chatting
            </div>
          )}
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className={`max-w-[85%] break-words text-sm ${
                m.from === "user"
                  ? "ml-auto bg-blue-200 text-black"
                  : "mr-auto bg-white border text-gray-900"
              } rounded-xl px-3 py-1.5 shadow-sm`}
            >
              {m.text}
            </motion.div>
          ))}
          {loading && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mr-auto bg-white rounded-xl border px-3 py-1.5 text-gray-500 max-w-[85%] shadow-sm text-sm"
            >
              <div className="flex items-center">
                <span className="mr-2">Assistant is typing</span>
                <span className="flex">
                  <span className="animate-bounce mx-[1px] h-1 w-1 bg-gray-500 rounded-full"></span>
                  <span className="animate-bounce mx-[1px] h-1 w-1 bg-gray-500 rounded-full" style={{animationDelay: "0.2s"}}></span>
                  <span className="animate-bounce mx-[1px] h-1 w-1 bg-gray-500 rounded-full" style={{animationDelay: "0.4s"}}></span>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="h-[80px] px-3 py-2 rounded-b-lg flex gap-2 items-start">
        <textarea
          className="w-full border border-gray-300 p-2 text-black rounded-lg resize-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 outline-none transition-all min-h-[50px] max-h-[50px] text-sm"
          rows={2}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-blue-200 hover:bg-blue-500 text-black px-3 py-1.5 rounded-lg font-medium transition disabled:cursor-not-allowed h-[50px]"
        >
          Send
        </button>
      </div>
    </div>
  );
}