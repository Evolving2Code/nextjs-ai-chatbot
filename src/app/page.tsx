'use client';

import { useState } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hello! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Append user message locally
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Mocking an assistant reply for now to test the UI loop
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "I received your message! We'll hook up the live streaming API in the next step.",
        },
      ]);
    }, 600);
  };

  return (
    <main className="flex flex-col h-screen max-w-2xl mx-auto bg-slate-50 shadow-md">
      {/* Header */}
      <header className="p-4 bg-white border-b border-slate-200 text-center font-semibold text-slate-800">
        🤖 Next.js AI Chatbot
      </header>

      {/* Chat Messages Box */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form Footer */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:border-blue-500 text-sm bg-slate-50 text-slate-900"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors"
        >
          Send
        </button>
      </form>
    </main>
  );
}
