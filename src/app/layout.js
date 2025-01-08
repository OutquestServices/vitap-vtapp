import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Home/Fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "V-TAPP 2025",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
