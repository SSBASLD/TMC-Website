import { lusitana } from "../ui/fonts";
import { inter } from "../ui/fonts";
import SignUpForm from "../ui/sign-up-form";

export default function Home() {
    return (
        <main className="h-[100%] w-[100%%] p-[3%]">
            <SignUpForm signUpType='Individual'></SignUpForm>
        </main>
    );
}