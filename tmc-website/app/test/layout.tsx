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

            <div className={`w-screen h-[8%] bg-auto bg-cyan-700 outline outline-solid outline-black flex items-center grid grid-cols-[33%_33%_34%]`}>
                <div>01</div>
                <div>02</div>
                <button className={`
                    w-[20%]
                    h-[80%]
                    bg-auto
                    bg-yellow-500
                    flex
                    items-center
                    justify-center
                    text-center
                    place-self-center
                    rounded-full
                    ${inter.className}
                `}>
                    Next
                </button>
            </div>
        </div>
    );
}
