'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  icon: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: '🤖', label: 'AI Assistant', href: '/student/assistant' },
  { icon: '🚨', label: 'Emergency Help', href: '/student/emergency' },
  { icon: '📊', label: 'Dashboard', href: '/student/dashboard' },
  { icon: '📝', label: 'Notes', href: '/student/notes' },
  { icon: '📚', label: 'Resources', href: '/student/resources' },
];

export default function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link href="/student/assistant" className="flex items-center">
          <div className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
            EduRescue
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="px-4 py-4 border-t border-gray-200">
        <Link
          href="/help"
          className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <span className="text-xl mr-3">❓</span>
          <span className="text-sm">Help & Support</span>
        </Link>
      </div>
    </aside>
  );
}
