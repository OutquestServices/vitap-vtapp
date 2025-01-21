import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-[60vh] flex flex-col items-center justify-center gap-10">
      <div className="bg-gray-700 p-4 rounded-md mb-6">
        <ul className="list-disc list-inside text-gray-300 text-sm">
          <li>Kindly Allow the camera access.</li>
          <li>
            If front camera opens kindly refresh the page then it automatically
            open back cameera
          </li>
          <li>
            See the history in case of any issues regharding duplicate or any
            issues.
          </li>
          <li>
            If there is any issues in login or scaning, please contact at{" "}
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
