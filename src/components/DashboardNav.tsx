'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function DashboardNav() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/dashboard" className="bg-green-600 text-white p-2 rounded-lg font-bold text-xl">
                            EduRescue
                        </Link>
                        <span className="ml-4 text-gray-700 font-semibold">ড্যাশবোর্ড</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/profile" className="text-gray-700 hover:text-green-600 transition">
                            প্রোফাইল
                        </Link>
                        <Link href="/help" className="text-gray-700 hover:text-green-600 transition">
                            সাহায্য
                        </Link>
                        <button
                            onClick={() => signOut({ callbackUrl: '/' })}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition text-sm"
                        >
                            লগআউট
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}