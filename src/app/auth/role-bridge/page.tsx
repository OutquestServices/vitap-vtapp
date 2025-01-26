"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Home/Fotter";
import Navbar from "@/components/Home/Navbar";

export default function RoleBridgePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Wait for session to load
    if (status === "authenticated") {
      // Check the role
      const role = session?.user?.role;

      if (role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    } else if (status === "unauthenticated") {
      // If user is not authenticated, redirect to sign-in
      router.push("/auth/signin");
    }
  }, [status, session, router]);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <p className="text-white text-lg font-semibold animate-pulse">
          Loading, please wait...
        </p>
      </div>
      <Footer />
    </div>
  );
}
