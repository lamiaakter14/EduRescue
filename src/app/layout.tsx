import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import { auth } from '@/lib/auth'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(auth)

  return (
    <html lang="bn">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}