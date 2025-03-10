'use server'

import { fetchUserById } from "@/app/lib/data";
import TeamPending from "@/app/ui/test-layout/team/team-pending";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();
    const userId = session?.userId ? session.userId : '';

    const user = await fetchUserById(userId);

    return (
        <>
            <TeamPending teamId={user?.team || ""} userId={userId}></TeamPending>
        </>
    );
}