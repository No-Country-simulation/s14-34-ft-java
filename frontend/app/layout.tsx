import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HappyPaws",
  description: "HappyPaws",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en" className="bg-color1 text-color2 font-sans">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>

  );
}
