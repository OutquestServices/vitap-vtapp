import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req: Request) {
  // Get the session (auth function must return session with role)
  const session = await auth();

  // Routes that only admins can access
  const protectedRoutes = ["/dashboard", "/dashboard/scan", "/uploadposter"];

  const pathname = new URL(req.url).pathname;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // If the route is protected
  if (isProtected) {
    // If there's no session or the user is not an admin, redirect to sign-in
    if (!session || session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
  }

  // Allow access to non-protected routes or valid admin users
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/uploadposter"], // Apply middleware to these routes
};
