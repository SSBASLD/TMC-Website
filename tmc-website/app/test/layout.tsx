import { inter } from "@/app/ui/fonts";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${inter.className} bg-auto bg-slate-50 w-screen h-screen min-h-[900px] overflow-x-hidden`}>
            <div className={`w-screen h-[8%] bg-auto bg-cyan-700 outline outline-solid outline-black`}></div>

            <div className={`w-screen h-[84%] bg-auto`}>{children}</div>

            <div className={`w-screen h-[8%] bg-auto bg-cyan-700 outline outline-solid outline-black`}></div>
        </div>
    );
}
