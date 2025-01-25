import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";
const prisma = new PrismaClient();

export const { handlers, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          name: profile.name,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userEmail = (user as { email: string }).email;

        const existingUser = await prisma.users.findFirst({
          where: { email: userEmail },
        });

        // Dynamically assign role
        token.role = existingUser ? "admin" : "user";
      }
      return token;
    },

    async session({ session, token }) {
      // Attach the role to the session object
      session.user.role = token.role;
      return session;
    },

    async redirect({ url, baseUrl }) {
      // Redirect to the role-bridge page after sign-in
      if (url === "/api/auth/signin" || url === baseUrl) {
        return `${baseUrl}/auth/role-bridge`;
      }
      return url;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    maxAge: 24 * 60 * 60, // 24 hours
  },
});
