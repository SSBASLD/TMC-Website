import AutoSignOutForm from "@/app/ui/automatic-sign-out";
import LoginForm from "@/app/ui/login-form";

export default function Home() {
    return (
        <main className="h-[100%] w-[100%%] p-[3%]">
            <LoginForm loginType='Team'></LoginForm>
            <AutoSignOutForm></AutoSignOutForm>
        </main>
    );
}