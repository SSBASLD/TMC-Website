import { lusitana } from "@/app/ui/fonts";
import { signOutAsync } from "../lib/actions";
import { useEffect, useRef } from "react";
import AutoSignOutForm from "../ui/automatic-sign-out";

export default function Home() {

    return (
        <main className={`p-[2%] w-[100%] h-[100%] overflow-scroll`}>
            <p className={`top-[8%] left-[10%] right-[10%] flex items-center justify-left ${lusitana.className} text-black
                Laptop:text-[50px] 
                Tablet:text-[40px] 
                Mobile-S:text-[30px]`}
            >
                Individual Competitions
            </p>

            <div className={`flex flex-wrap gap-4`}>
                <div className={`w-[300px] border-2 border-black p-[5px]`}>
                    <p className={`text-[20px] text-black font-bold`}> Individual Competition </p>
                    <p className={`text-[20px] text-black`}> Time Limit: 40 minutes </p>
                    <p className={`text-[20px] text-black italic`}> Available between 3/14 and 3/21 </p>
                </div>
            </div>
        </main>
    );
}
