// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      club?: string | null;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    club?: string | null;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    club?: string | null;
    role?: string;
  }
}
