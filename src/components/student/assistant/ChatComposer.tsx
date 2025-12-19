'use client';

import { useState, FormEvent } from 'react';

interface ChatComposerProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatComposer({ onSendMessage, disabled = false }: ChatComposerProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        {/* Attachment button */}
        <button
          type="button"
          className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition mb-2"
          title="Attach file"
        >
          <span className="text-2xl">📎</span>
        </button>

        {/* Message input */}
        <div className="flex-1">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="আপনার প্রশ্ন লিখুন... (Press Enter to send)"
            disabled={disabled}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            rows={1}
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
        </div>

        {/* Send button */}
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="flex-shrink-0 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <span className="text-xl">📤</span>
        </button>
      </form>

      {/* Quick actions */}
      <div className="mt-3 flex items-center space-x-2">
        <button
          type="button"
          className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition"
        >
          📊 Math Help
        </button>
        <button
          type="button"
          className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition"
        >
          🔬 Science
        </button>
        <button
          type="button"
          className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition"
        >
          📝 Writing
        </button>
      </div>
    </div>
  );
}
