// next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * The shape of the session object returned by `useSession`, `getSession`,
   * and in the NextAuth `session` callback.
   */
  interface Session {
    user: {
      /** Add the role to the Session user object. */
      role?: string;
    } & DefaultSession["user"];
  }

  /**
   * The shape of the returned user from the credentials and OAuth providers.
   */
  interface User extends DefaultUser {
    /** You can add any custom properties to the User object. */
    role?: string;
  }
}

declare module "next-auth/jwt" {
  /**
   * The shape of the JWT, which is persisted in cookies/Storage.
   */
  interface JWT {
    /** Add the role to the JWT. */
    role?: string;
  }
}
