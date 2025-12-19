import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ExpertLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(auth);

  // Redirect to signin if not authenticated
  if (!session) {
    redirect('/auth/signin');
  }

  // Simple layout for expert pages - to be enhanced later
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Expert Dashboard</h1>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
