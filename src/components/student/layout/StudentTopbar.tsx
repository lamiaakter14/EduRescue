'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface StudentTopbarProps {
  studentName?: string;
  studentEmail?: string;
}

export default function StudentTopbar({ studentName, studentEmail }: StudentTopbarProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <span className="text-2xl">☰</span>
        </button>

        {/* Page title or breadcrumb */}
        <div className="flex-1 md:ml-0 ml-4">
          <h1 className="text-lg font-semibold text-gray-900">
            স্বাগতম, EduRescue
          </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="text-gray-700 hover:text-green-600 transition relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {studentName || 'Student'}
              </p>
              <p className="text-xs text-gray-500">
                {studentEmail || ''}
              </p>
            </div>
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
              {(studentName || 'S').charAt(0).toUpperCase()}
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/auth/signin' })}
              className="hidden md:block text-gray-700 hover:text-red-600 transition"
              title="Logout"
            >
              <span className="text-xl">🚪</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
