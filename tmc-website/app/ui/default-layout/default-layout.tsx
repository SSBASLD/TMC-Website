import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { lusitana } from "@/app/ui/fonts";
import NavLinks from "@/app/ui/default-layout/nav-links";
import { useEffect, useRef } from "react";
import { signOutAsync } from "@/app/lib/actions";
import { signOut } from "@/auth";

export default function DefaultLayout({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <div className={`${inter.className} bg-auto bg-slate-50 w-screen h-screen min-h-[950px] overflow-x-hidden`}>
            <div className={`w-screen h-[5%] pl-[1vw] pb-[1vw] pt-[0px] text-cyan-700 ${lusitana.className} 
          Tablet:text-[60px] Tablet:h-[7%]
          Mobile-L:text-[34px] Mobile-L:h-[4%]
          Mobile-S:text-[25px] Mobile-S:h-[3%]`}
            >
                <span className={`align-text-bottom`}>
                    Tennessee Math Coalition
                </span>
            </div>

            <div className={`w-[100%] h-[8%] bg-auto bg-slate-500 grid 
          Laptop:grid-cols-[7%_12%_14%_13%_45%_9%] 
          Mobile-S:grid-cols-[13%_20%_25%_25%_5%_12%]
          Tablet:grid-cols-[10%_13%_18%_18%_31%_10%]`}
            >
                <NavLinks></NavLinks>
                <div></div>
                <form action={async () => {
                    'use server';
                    await signOut();
                }} className={`flex items-center justify-center`}>
                    <button className={`text-white text-center hover:text-blue-300
              Mobile-S:text-[12px]
              Tablet:text-[13px]
              Laptop-L:text-[20px]`}
                    >
                        Sign Out
                    </button>
                </form>
            </div>

            <div className={`w-screen h-[72%]`}>
                {children}
            </div>

            <div className='w-screen h-[0.5%] bg-auto bg-blue-900'></div>

            <span className='w-screen h-[8%] origin-bottom bg-auto flex items-center justify-center text-cyan-500
          Mobile-S:text-[10px]
          Mobile-M:text-[12px]
          Tablet:text-[20px]'
            >
                For issues or questions contact [tnmathcoalition@gmail.com]
            </span>
        </div>
    );
}
