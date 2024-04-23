import type { Metadata } from "next";
import Layout from "@/app/layout"
import { Inter } from "next/font/google";
import "@/app/globals.css";


export const metadata: Metadata = {
  title: "Perfil",
  description: "Perfil HappyPaws",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  )
}
