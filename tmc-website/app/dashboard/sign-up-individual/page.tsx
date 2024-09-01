import { lusitana } from "@/app/ui/fonts";
import { inter } from "@/app/ui/fonts";
import SignUpForm from "@/app/ui/sign-up-form";

export default function Home() {
    return (
        <main className="h-[100%] w-[100%] p-[3%]">
            <SignUpForm signUpType='Individual'></SignUpForm>
        </main>
    );
}