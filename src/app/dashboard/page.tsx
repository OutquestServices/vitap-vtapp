"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();

  console.log("session", session.data);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Protected page</p>
    </div>
  );
}
