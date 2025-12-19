'use client';

import { useState } from 'react';
import { ChatMessage } from '@/types/student';
import ChatMessageList from './ChatMessageList';
import ChatComposer from './ChatComposer';

export default function ChatShell() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `ধন্যবাদ আপনার প্রশ্নের জন্য! "${content}"\n\nআমি এটি নিয়ে কাজ করছি এবং শীঘ্রই আপনাকে সাহায্য করব। এটি একটি প্লেসহোল্ডার রেসপন্স। আসল AI ইন্টিগ্রেশন শীঘ্রই যুক্ত হবে।\n\nএই মুহূর্তে আপনি:\n• আরও প্রশ্ন করতে পারেন\n• Emergency Help এ যেতে পারেন\n• এই উত্তর সংরক্ষণ করতে পারেন`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
      {/* Chat header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">AI Assistant</h2>
            <p className="text-sm text-gray-500">
              {isLoading ? 'Typing...' : 'Online • Ready to help'}
            </p>
          </div>
          <button className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition text-sm font-medium">
            🚨 Escalate to Expert
          </button>
        </div>
      </div>

      {/* Messages area */}
      <ChatMessageList messages={messages} />

      {/* Composer */}
      <ChatComposer onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
