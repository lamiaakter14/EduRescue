'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { id: 1, text: 'স্বাগতম! আমি কিভাবে আপনাকে সাহায্য করতে পারি?', sender: 'expert' },
        { id: 2, text: 'গণিতের একটি সমস্যা বুঝতে সমস্যা হচ্ছে', sender: 'user' }
    ])
    const [newMessage, setNewMessage] = useState('')

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: messages.length + 1,
                text: newMessage,
                sender: 'user'
            }])
            setNewMessage('')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* হেডার */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">💬 লাইভ চ্যাট</h1>
                            <p className="text-sm text-gray-600">এক্সপার্ট: মাহেদি স্যার (গণিত)</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Link
                                href="/dashboard"
                                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition text-sm"
                            >
                                ড্যাশবোর্ড
                            </Link>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                🟢 অনলাইন
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* মেসেজ এরিয়া */}
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="bg-white rounded-lg shadow-sm border h-[500px] flex flex-col">

                    {/* মেসেজ লিস্ট */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                <div
                                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${message.sender === 'user'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-200' : 'text-gray-500'
                                        }`}>
                                        {new Date().toLocaleTimeString('bn-BD', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* মেসেজ ইনপুট */}
                    <div className="border-t p-4">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                placeholder="আপনার মেসেজ টাইপ করুন..."
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                পাঠান
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            এন্টার চাপলে মেসেজ পাঠানো হবে
                        </p>
                    </div>
                </div>

                {/* এক্সট্রা ফিচারস */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <span className="text-2xl">📎</span>
                        <p className="text-sm mt-2">ফাইল অ্যাটাচ করুন</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <span className="text-2xl">🎥</span>
                        <p className="text-sm mt-2">ভিডিও কল</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <span className="text-2xl">💾</span>
                        <p className="text-sm mt-2">চ্যাট সেভ করুন</p>
                    </div>
                </div>
            </div>
        </div>
    )
}