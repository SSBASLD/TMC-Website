import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import { lusitana } from "./ui/fonts";
import "./globals.css";
import NavLinks from "./ui/default-layout/nav-links";
import { useEffect, useRef } from "react";
import { signOutAsync } from "./lib/actions";

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
      <body className={`${inter.className} bg-auto bg-slate-50 w-screen h-screen min-h-[950px] overflow-x-hidden`}>
        <div className={`w-screen h-[5%] pl-[1vw] pb-[1vw] pt-[0px] text-cyan-700 ${lusitana.className} 
          Tablet:text-[60px] Tablet:h-[7%]
          Mobile-L:text-[34px] Mobile-L:h-[4%]
          Mobile-S:text-[25px] Mobile-S:h-[3%]`}
        >
          <span className={`align-text-bottom`}>
            Tennessee Math Coalition
          </span>
        </div>

        <div className='w-[100%] h-[8%] bg-auto bg-slate-500 grid 
          Laptop:grid-cols-[7%_8%_12%_13%_52%_8%] 
          Mobile-S:grid-cols-[13%_20%_25%_35%]
          Tablet:grid-cols-[10%_13%_20%_20%_29%_8%]'
        >
          <NavLinks></NavLinks>
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
      </body>
    </html>
  );
}
