import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PBKDF2PasswordHasher } from '@/lib/auth/password-hasher';
import {getUserByHandle} from "@/lib/queries/users";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                handle: { label: 'Handle', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // Add your own logic here to validate credentials
                const user = await validateUser(credentials);
                if (user) {
                    return { id: user.id, email: user.email, name: user.name }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/logout',
        error: '/error',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.role = user.role;
                token.userId = user.id;
            }

            // console.log('jwt token', token);
            return token;
        },
        async session({ session, token }) {
            session.user.role = token.role;
            session.user.id = token.userId;
            return session;
        },
    },
});

export { handler as GET, handler as POST };


async function validateUser(credentials) {
    if (!credentials.handle || !credentials.password) {
        return null;
    }

    try {
        // Get user from your database with Django password hash
        const user = await getUserByHandle(credentials.handle);
        if (!user) {
            return null;
        }

        const hasher = new PBKDF2PasswordHasher();
        const isValidPassword = hasher.verify(
            credentials.password,
            user.password
        );
        if (!isValidPassword) {
            return null;
        }

        return {
            id: user.id.toString(),
            email: user.email,
            name: user.name || user.handle,
            username: user.handle
        };

    } catch (error) {
        return null;
    }

    return null
}