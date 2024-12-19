import { theme } from "@/theme.config";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`overflow-hidden overflow-y-hidden w-screen h-screen p-0 m-0`}>
            {children}
        </div >
    );
}
