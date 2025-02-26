'use client';

//Basically copied this entire thing from the tutorial lol

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { inter } from "../fonts";
import { useRef, useEffect } from "react";
import { signOutAsync } from "@/app/lib/actions";

//Map of Links
//Shouldn't be that much so no need to store on DB
const links = [
    { name: 'Home', href: '/dashboard' },
    {
        name: 'Team Contest', href: '/competition/team'
    },
    { name: 'Individual Contest', href: '/competition/individual' },
    { name: 'Contest Information', href: '/dashboard/contest-information' },
];

export default function NavLinks() {
    const pathName = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            `flex items-center justify-center ${inter.className} hover:text-blue-300 text-center 
                                Mobile-S:text-[12px]
                                Tablet:text-[13px]
                                Laptop-L:text-[20px]`,
                            {
                                'text-blue-300': pathName === link.href
                            }
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}