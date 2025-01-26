"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  console.log("Session Data:", session);
  console.log("Session Status:", status);

  if (status === "loading") {
    return <p>Loading...</p>; // Show loading state while the session is being fetched
  }

  if (!session) {
    return (
      <div className="bg-black min-h-[60vh] flex flex-col items-center justify-center gap-10">
        <p className="text-white">You are not authenticated. Please sign in.</p>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (session?.user?.role !== "admin") {
    return (
      <div className="bg-black min-h-[60vh] flex flex-col items-center justify-center gap-10">
        <p className="text-white">You are not authorized to view this page.</p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-[60vh] flex flex-col items-center justify-center gap-10">
      <div className="bg-gray-700 p-4 rounded-md mb-6">
        <ul className="list-disc list-inside text-gray-300 text-sm">
          <li>Kindly allow camera access.</li>
          <li>
            If the front camera opens, refresh the page to automatically switch
            to the back camera.
          </li>
          <li>Check the history in case of duplicate or other issues.</li>
          <li>
            For login or scanning issues, contact{" "}
            <a
              href="mailto:akshay.22bce9221@vitapstudent.ac.in"
              className="text-blue-400 underline"
            >
              akshay.22bce9221@vitapstudent.ac.in
            </a>
            .
          </li>
        </ul>
      </div>
      <Link
        href="/uploadposter"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Poster
      </Link>
      <Link
        href="/dashboard/scan"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Scan QR
      </Link>
      <Link
        href="/dashboard/history"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Scan History
      </Link>
    </div>
  );
}
