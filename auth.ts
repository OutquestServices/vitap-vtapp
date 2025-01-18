import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Add your Google Client ID here
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Add your Google Client Secret here
      authorization: {
        params: {
          prompt: "select_account",
          redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the user is allowed to sign in
      const isValidUser = await prisma.users.findUnique({
        where: {
          email: user.email as string,
        },
        select: {
          email: true,
          club: true,
        },
      });

      if (isValidUser) {
        return true; // Allow login
      } else {
        console.log(`Access denied for user: ${user.email}`);
        return false; // Deny login
      }
    },

    async redirect({ url, baseUrl }) {
      // Redirect to `/dashboard` after successful login
      return `${baseUrl}/dashboard`;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      // Add additional information to the JWT token
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Set a secret key for security
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error", // Error page
  },
  session: {
    // Configure session expiration
    maxAge: 24 * 60 * 60, // 24 hours in seconds
  },
  jwt: {
    // Configure JWT expiration
    maxAge: 24 * 60 * 60, // 24 hours in seconds
  },
});
