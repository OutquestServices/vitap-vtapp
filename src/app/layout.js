import { Lexend } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { GoogleAnalytics } from "@next/third-parties/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "V-TAPP 2025 | VIT-AP University - Amaravati",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-8TC7T9HD2B" />
      <body className={lexend.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
