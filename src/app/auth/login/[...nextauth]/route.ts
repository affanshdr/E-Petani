// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { type AuthOptions } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter"; // Nonaktifkan sementara
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { User } from "@/generated/prisma";

export const authOptions: AuthOptions = {
  // adapter: PrismaAdapter(db), // Nonaktifkan adapter untuk diagnosis
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
        console.log("--- AUTHORIZE (Mode Diagnosis) ---");
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
          console.log("Authorize: Password benar. Mengembalikan user.");
          // Mengembalikan hanya data yang dibutuhkan untuk sesi JWT
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("--- JWT CALLBACK (Mode Diagnosis) ---");
      if (user) {
        // 'user' di sini berasal dari return value 'authorize'
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("--- SESSION CALLBACK (Mode Diagnosis) ---");
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
