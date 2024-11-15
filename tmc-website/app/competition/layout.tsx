import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { lusitana } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/default-layout/nav-links";
import { useEffect, useRef } from "react";
import { signOutAsync } from "@/app/lib/actions";
import { signOut } from "@/auth";
import DefaultLayout from "@/app/ui/default-layout/default-layout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <DefaultLayout children={children}></DefaultLayout>
    );
}
