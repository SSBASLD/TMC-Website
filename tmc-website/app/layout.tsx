import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import { lusitana } from "@/app/ui/fonts";
import "./globals.css";
import NavLinks from "./ui/default-layout/nav-links";
import { useEffect, useRef } from "react";
import { signOutAsync } from "./lib/actions";
import { signOut } from "@/auth";

export const metadata: Metadata = {
  title: "TMC Competition Website",
  description: "Sponsored by TMC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen h-screen`}>
        {children}
      </body>
    </html>
  );
}
