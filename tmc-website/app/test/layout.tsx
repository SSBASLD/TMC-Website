import { inter } from "@/app/ui/fonts";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${inter.className} bg-auto bg-slate-50 w-screen h-screen min-h-[900px] overflow-x-hidden`}>
            <div className={`w-screen h-[10%] bg-auto bg-blue-100`}></div>

            <div className={`w-screen h-[80%] bg-auto`}></div>

            <div className={`w-screen h-[10%] bg-auto bg-red-100`}></div>
        </div>
    );
}
