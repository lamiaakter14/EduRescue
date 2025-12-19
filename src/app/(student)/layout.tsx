import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import StudentShell from '@/components/student/layout/StudentShell';

export default async function StudentLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(auth);

  // Redirect to signin if not authenticated
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <StudentShell
      studentName={session.user?.name || undefined}
      studentEmail={session.user?.email || undefined}
    >
      {children}
    </StudentShell>
  );
}
