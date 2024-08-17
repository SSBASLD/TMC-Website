import { inter } from "./fonts";
import Image from "next/image";

export default function LoginForm({loginType}: {loginType: string}) {
    return (
        <>
            <div className={`bg-auto bg-slate-100 w-[100%] h-[100%] p-[3%] rounded-md shadow-md ${inter.className} text-black text-[1.5vw]`}>
                {loginType} - Sign In <br></br>

                <div className={`h-[15%]`}></div>

                <div className="relative h-[10%] content-right">
                    <input
                        className={`absolute left-[3%] peer block w-[50%] h-[100%] rounded-r-md border border-gray-200 py-[0.5%] pl-[0.5%] text-sm outline-2 placeholder:text-gray-500`}
                        id="username"
                        type="username"
                        name="username"
                        placeholder="Username"
                        required
                    >
                    </input>

                    <div className={`absolute w-[3%] h-[100%] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
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

                <div className="relative h-[10%] content-right">
                    <input
                        className={`absolute left-[3%] peer block w-[50%] h-[100%] rounded-r-md border border-gray-200 py-[0.5%] pl-[0.5%] text-sm outline-2 placeholder:text-gray-500`}
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    >
                    </input>

                    <div className={`absolute w-[3%] h-[100%] bg-auto bg-gray-300 rounded-l-md flex justify-center items-center`}>
                        <Image
                            src="/Lock.png"
                            width={512}
                            height={512}
                            alt="Lock"
                            className={`absolute h-[75%] w-auto z-40`}
                        ></Image>
                    </div>
                </div>

                <div className="h-[30%]"></div>

                <div className={`relative w-[100%] h-[10%]`}>
                    <button className={`bg-auto bg-cyan-700 w-[6%] h-[100%] p-[0.8%] flex justify-center items-center ${inter.className} text-white text-[1vw]`}>
                        Sign In
                    </button>

                    <div className={`absolute top-0 left-[10%] h-[100%] ${inter.className} text-[1.3vw] flex justify-center items-center`}>
                        Don't have an account? Sign up!
                    </div>
                </div>
            </div>
        </>
    );
}