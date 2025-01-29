"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiUpload, FiSearch, FiClock, FiAlertCircle, FiList } from "react-icons/fi";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div
          className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        ></motion.div>
      </div>
    );
  }

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
        <p className="text-xl text-gray-300">
          You are not authenticated. Please sign in.
        </p>
        <button
          onClick={() =>
            signIn("google", { callbackUrl: "/auth/role-bridge" })
          }
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Sign In
        </button>
      </motion.div>
    );
  }

  if (session?.user?.role !== "admin") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Unauthorized</h1>
        <p className="text-xl text-gray-300">
          You are not authorized to view this page.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Return to Home
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>
      <motion.div
        className="bg-gray-900 p-6 rounded-xl shadow-lg mb-8 max-w-md w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-lg font-semibold text-white mb-4">
          <span className="block">
            Name: <span className="text-gray-300">{session?.user?.name?.split(' ')[0]} {session?.user?.name?.split(' ')[1]}</span>
          </span>
          <span className="block">
            Reg No: <span className="text-gray-300">{session?.user?.name?.split(' ')[2]}</span>
          </span>
          <span className="block mt-2">
            Event: <span className="text-gray-300">{session?.user?.club}</span>
          </span>
        </h2>
        <ul className="space-y-3 text-gray-300">
          <motion.li whileHover={{ x: 5 }} className="flex items-center">
            <FiAlertCircle className="mr-2 text-yellow-500 text-sm" />
            Kindly allow camera access.
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="flex items-center">
            <FiAlertCircle className="mr-2 text-yellow-500 text-sm" />
            If the front camera opens, refresh the page to switch to the back
            camera.
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="flex items-center">
            <FiAlertCircle className="mr-2 text-yellow-500 text-sm" />
            Check the history for duplicate or other issues.
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="flex items-center">
            <FiAlertCircle className="mr-2 text-yellow-500 text-sm" />
            For login or scanning issues, contact{" "}
            <a
              href="mailto:akshay.22bce9221@vitapstudent.ac.in"
              className="text-blue-400 underline ml-1 hover:text-blue-300"
            >
              support
            </a>
            .
          </motion.li>
        </ul>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {session?.user?.club === "all" ? (
          <Link href="/dashboard/admin/uploadposter">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
            >
              <span>Upload Poster</span>
              <FiUpload className="text-lg" />
            </motion.button>
          </Link>
        ) : null}
        <Link href="/dashboard/admin/registrations">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
          >
            <span>Registrations</span>
            <FiList className="text-lg" />
          </motion.button>
        </Link>
        <Link href="/dashboard/admin/scan">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
          >
            <span>Scan QR</span>
            <FiSearch className="text-lg" />
          </motion.button>
        </Link>
        <Link href="/dashboard/admin/history">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
          >
            <span>Scan History</span>
            <FiClock className="text-lg" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
