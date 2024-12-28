import { Box } from "@mui/material";
import JoinTeamForm from "@/app/ui/join-team-form"

export default function Home() {
    return (
        <>
            <main className="h-[100%] w-[100%%] p-[3%]">
                <JoinTeamForm></JoinTeamForm>
            </main>
        </>
    );
}