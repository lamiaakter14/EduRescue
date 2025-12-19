'use client';

import { ReactNode } from 'react';
import StudentSidebar from './StudentSidebar';
import StudentTopbar from './StudentTopbar';

interface StudentShellProps {
  children: ReactNode;
  studentName?: string;
  studentEmail?: string;
}

export default function StudentShell({ children, studentName, studentEmail }: StudentShellProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main content area */}
      <div className="md:pl-64">
        {/* Topbar */}
        <StudentTopbar studentName={studentName} studentEmail={studentEmail} />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
