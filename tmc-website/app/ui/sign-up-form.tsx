import { inter } from "./fonts";

export default function SignUpForm({signUpType}: {signUpType: 'Team' | 'Individual'}) {
    return (
        <>
            <div className={`bg-auto bg-slate-100 w-[100%] h-[100%] p-[3%] rounded-md shadow-md ${inter.className} text-black text-center
                Mobile-S:text-[30px]
                Tablet:text-[40px]`}>

                Create an Account<br></br>

                <div className={`h-[5%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="username"
                    type="username"
                    name="username"
                    placeholder="Username"
                    required
                >
                </input>

                <div className={`h-[5%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                >
                </input>
                <br></br>

                <div className={`h-[5%]`}></div>

                <input
                    className={`w-[50%] min-w-[200px] h-[10%] rounded-r-md border border-gray-200 py-[0.5%] pl-[1%] text-[16px] outline-2 placeholder:text-gray-500`}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                >
                </input>
                <br></br>
            </div>
        </>
    );
}