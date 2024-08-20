import LoginForm from "../ui/login-form";

export default function Home() {
    return (
        <main className="h-[100%] w-[100%%] p-[3%]">
            <LoginForm loginType='Team'></LoginForm>
        </main>
    );
}