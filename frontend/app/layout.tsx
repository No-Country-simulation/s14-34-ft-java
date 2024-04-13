import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/context/SessionAuthProvider";
import { roboto } from '@/app/ui/fonts';

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
      <html lang="en" className="">
        <body className={roboto.className}>{children}</body>
      </html>
    </SessionProvider>

  );
}
