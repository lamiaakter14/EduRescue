import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Simple demo users
const users = [
    {
        id: '1',
        email: 'student@edurescue.com',
        password: 'password',
        name: 'Demo Student',
        role: 'student'
    },
    {
        id: '2',
        email: 'expert@edurescue.com',
        password: 'password',
        name: 'মাহেদি স্যার',
        role: 'expert'
    }
]

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = users.find(u =>
                    u.email === credentials.email && u.password === credentials.password
                )

                if (user) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                }
                return null
            }
        })
    ],
    session: {
        strategy: 'jwt' as const
    },
    pages: {
        signIn: '/auth/signin'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role as string
                session.user.id = token.id as string
            }
            return session
        }
    }
}

// Export the auth configuration for getServerSession
export const auth = authOptions

// Export the auth function directly
export default NextAuth(authOptions)