import AutoSignOutForm from "@/app/ui/automatic-sign-out";
import { lusitana, inter } from "@/app/ui/fonts";
import SignUpForm from "@/app/ui/sign-up-form";

export default function Home() {
    return (
        <main className="h-[100%] w-[100%] p-[3%]">
            <SignUpForm signUpType='Team'></SignUpForm>
            <AutoSignOutForm></AutoSignOutForm>
        </main>
    );
}