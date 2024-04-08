import type { Metadata } from "next";
import Layout from "@/app/layout"
import { Inter } from "next/font/google";
import "@/app/globals.css";
import FootersOne from "@/components/containers/footers/footersOne";
import HeadersOne from "@/components/containers/headers/headersOne";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HappyPaws",
  description: "HappyPaws",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeadersOne />
      {children}
      <FootersOne />
    </>
  )
}
