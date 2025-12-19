'use client';

import { ChatMessage } from '@/types/student';

interface ChatMessageListProps {
  messages: ChatMessage[];
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            EduRescue AI Assistant
          </h2>
          <p className="text-gray-600 mb-6">
            আমি আপনার একাডেমিক সমস্যা সমাধানে সাহায্য করতে প্রস্তুত!
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>💡 আমাকে যেকোনো বিষয়ে প্রশ্ন করুন</p>
            <p>📚 হোমওয়ার্ক, পরীক্ষা প্রস্তুতি, ধারণা ব্যাখ্যা</p>
            <p>⚡ তাৎক্ষণিক সাহায্য পেতে নিচে টাইপ করুন</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-green-600 text-white'
                : 'bg-white border border-gray-200'
            } rounded-lg px-4 py-3 shadow-sm`}
          >
            {/* Message header */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-semibold">
                {msg.role === 'user' ? '👤 আপনি' : '🤖 AI Assistant'}
              </span>
              <span
                className={`text-xs ${
                  msg.role === 'user' ? 'text-green-100' : 'text-gray-400'
                }`}
              >
                {new Date(msg.timestamp).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>

            {/* Message content */}
            <div
              className={`text-sm whitespace-pre-wrap ${
                msg.role === 'user' ? 'text-white' : 'text-gray-800'
              }`}
            >
              {msg.content}
            </div>

            {/* Action buttons for assistant messages */}
            {msg.role === 'assistant' && (
              <div className="mt-3 flex items-center space-x-2 pt-2 border-t border-gray-100">
                <button className="text-xs text-gray-500 hover:text-green-600 transition">
                  👍 Helpful
                </button>
                <button className="text-xs text-gray-500 hover:text-green-600 transition">
                  📋 Copy
                </button>
                <button className="text-xs text-gray-500 hover:text-green-600 transition">
                  💾 Save to Notes
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
