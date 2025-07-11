// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { type AuthOptions } from "next-auth";
// PrismaAdapter tidak digunakan dengan strategi JWT untuk CredentialsProvider
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: AuthOptions = {
  // Secara eksplisit gunakan strategi "jwt"
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (isPasswordCorrect) {
          // Kembalikan data user untuk dimasukkan ke dalam token JWT
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // Callback 'jwt' dipanggil saat token dibuat
    async jwt({ token, user }) {
      // 'user' hanya ada saat pertama kali login
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    // Callback 'session' dipanggil saat sesi diakses oleh client
    async session({ session, token }) {
      if (session.user) {
        // Ambil data dari token dan masukkan ke sesi
        // Tidak perlu lagi casting 'as string' karena tipe sudah didefinisikan di next-auth.d.ts
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
