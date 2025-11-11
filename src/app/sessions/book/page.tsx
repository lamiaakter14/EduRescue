'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function BookSessionPage() {
    const { data: session } = useSession()
    const router = useRouter()
    const [subject, setSubject] = useState('')
    const [urgency, setUrgency] = useState('medium')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const subjects = [
        '📊 গণিত',
        '🔬 পদার্থবিজ্ঞান',
        '🧪 রসায়ন',
        '📝 বাংলা',
        '🔠 ইংরেজি',
        '💻 প্রোগ্রামিং'
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!session) {
            alert('দয়া করে প্রথমে সাইন ইন করুন')
            router.push('/auth/signin')
            return
        }

        setLoading(true)

        try {
            // Database-এ session save করার API call (পরবর্তীতে implement করব)
            const response = await fetch('/api/sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subject,
                    urgency,
                    description,
                    studentId: session.user?.id
                }),
            })

            if (response.ok) {
                alert('সেশন রিকুয়েস্ট সাবমিট হয়েছে! একজন এক্সপার্ট শীঘ্রই যোগাযোগ করবেন।')
                router.push('/dashboard')
            } else {
                alert('সেশন সাবমিট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।')
            }
        } catch (error) {
            alert('নেটওয়ার্ক সমস্যা হয়েছে। আবার চেষ্টা করুন।')
        } finally {
            setLoading(false)
        }
    }

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg">লগইন প্রয়োজন</p>
                    <Link href="/auth/signin" className="text-green-600 hover:underline">
                        সাইন ইন করুন
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/dashboard" className="bg-green-600 text-white p-2 rounded-lg font-bold text-xl">
                                EduRescue
                            </Link>
                            <span className="ml-4 text-gray-700 font-semibold">সেশন বুক করুন</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                {session.user?.name || session.user?.email}
                            </span>
                            <Link
                                href="/dashboard"
                                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition text-sm"
                            >
                                ড্যাশবোর্ড
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="px-6 py-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">🎓 সেশন বুক করুন</h1>
                            <p className="text-gray-600 mt-2">আপনার সমস্যার জন্য একজন এক্সপার্ট সিলেক্ট করুন</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Subject Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    📚 বিষয় সিলেক্ট করুন
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {subjects.map((sub) => (
                                        <button
                                            key={sub}
                                            type="button"
                                            onClick={() => setSubject(sub)}
                                            className={`p-3 border rounded-lg text-sm font-medium transition ${subject === sub
                                                    ? 'bg-green-100 border-green-500 text-green-700'
                                                    : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Urgency Level */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    ⚡ জরুরীত্ব লেভেল
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { value: 'low', label: 'কম জরুরী', color: 'bg-green-100 text-green-700 border-green-300' },
                                        { value: 'medium', label: 'মধ্যম জরুরী', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' },
                                        { value: 'high', label: 'অতি জরুরী', color: 'bg-red-100 text-red-700 border-red-300' }
                                    ].map((level) => (
                                        <button
                                            key={level.value}
                                            type="button"
                                            onClick={() => setUrgency(level.value)}
                                            className={`p-3 border rounded-lg text-sm font-medium transition ${urgency === level.value
                                                    ? level.color
                                                    : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {level.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Problem Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    📝 সমস্যার বিবরণ দিন
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="আপনার সমস্যাটি বিস্তারিত বর্ণনা করুন... যেমন: 
- গণিতের কোন অধ্যায়?
- কোন ধরনের সমস্যা?
- কতক্ষণ ধরে সমস্যা?"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4 pt-6">
                                <Link
                                    href="/dashboard"
                                    className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition text-center font-medium"
                                >
                                    বাতিল করুন
                                </Link>
                                <button
                                    type="submit"
                                    disabled={loading || !subject || !description}
                                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'সাবমিট হচ্ছে...' : 'সেশন কনফার্ম করুন'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}