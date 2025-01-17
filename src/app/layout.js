import { Lexend } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "V-TAPP 2025",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
