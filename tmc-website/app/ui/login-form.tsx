'use client'

import { inter } from "./fonts";
import Image from "next/image";
import Link from "next/link";
import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useActionState } from "react";

export default function LoginForm() {
    const [state, formAction] = useActionState(authenticate, undefined);
    const { pending } = useFormStatus();

    return (
        <form action={formAction} className="h-[100%]">
            <div className={`bg-auto bg-slate-100 w-[100%] h-[100%] p-[3%] rounded-md shadow-md ${inter.className} text-black
                Mobile-S:text-[30px]
                Tablet:text-[40px]`}>
                Sign In <br></br>

                <div className={`h-[15%]`}></div>

                <div className="relative h-[65px] content-right">
                    <input
                        className={`absolute left-[65px] peer block w-[77%] min-w-[200px] max-w-[700px] h-[100%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="user_id"
                        type="username"
                        name="user_id"
                        placeholder="User ID"
                        required
                    >
                    </input>

                    <div className={`absolute size-[65px] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
                        <Image
                            src="/UserPic.png"
                            width={512}
                            height={512}
                            alt="UserPic"
                            className={`absolute h-[75%] w-auto z-40`}
                        ></Image>
                    </div>
                </div>

                <div className={`h-[10%]`}></div>

                <div className="relative h-[65px] content-right">
                    <input
                        className={`absolute left-[65px] peer block w-[77%] min-w-[200px] max-w-[700px] h-[100%] min-w-[200px] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    >
                    </input>

                    <div className={`absolute size-[65px] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
                        <Image
                            src="/Lock.png"
                            width={512}
                            height={512}
                            alt="Lock"
                            className={`absolute h-[75%] w-auto z-40`}
                        ></Image>
                    </div>
                </div>
                <div className={`text-[15px] text-red-500 h-[5%] w-[100%]`}>{state}</div>

                <div className="h-[25%]
                    Tablet:h-[25%]
                    Mobile-S:h-[100px]"></div>

                <div className={`relative w-[100%] h-[10%] grid
                    Mobile-S:grid-cols-[max(125px,6%)_60%]`}
                >
                    <button className={`bg-auto bg-cyan-700 w-[6%] min-w-[100px] h-[100%] p-[0.8%] flex justify-center items-center ${inter.className} text-white hover:bg-cyan-600 active:bg-cyan-900
                        Mobile-S:text-[15px]
                        Mobile-L:text-[20px]`}
                        disabled={pending}
                    >
                        Sign In
                    </button>

                    <p className={`h-[100%] ${inter.className} flex items-center justify-left
                        Mobile-M:text-[13px]
                        Mobile-S:text-[10.5px] 
                        Mobile-L:text-[20px]
                        Tablet:relative`}
                    >
                        Don't have an account?
                        <Link key={`Sign Up`} href={`/dashboard/sign-up`} className={`text-blue-400 
                            min-[585px]:relative min-[585px]:top-[0%]
                            Mobile-S:absolute Mobile-S:top-[60%]
                            Mobile-L:top-[40%] min-[426px]:top-[60%]
                            Mobile-M:top-[60%]`}
                        >
                            Sign up! {/* TODO: This needs to go to the google form where they sign up */}
                        </Link>
                    </p>
                </div>
            </div>
        </form>
    );
}