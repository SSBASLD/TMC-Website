'use client';

//Basically copied this entire thing from the tutorial lol

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { inter } from "../fonts";

//Map of Links
//Shouldn't be that much so no need to store on DB
const links = [
    { name: 'Home', href: '/' },
    { name: 'Team Login', href: '/team-login' },
    { name: 'Individual Login', href: '/individual-login' },
    { name: 'Contest Information', href: '/contest-information' },
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
                            `flex items-center justify-center ${inter.className} hover:text-blue-300 4K:text-[20px] text-center 
                                Mobile-S:text-[12px]
                                Tablet:text-[13px]`,
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