'use client';

import { useEffect, useRef } from "react";
import { signOutAsync } from "../lib/actions";

export default function AutoSignOutForm() {
    const formRef = useRef(document.createElement("form"));
    useEffect(() => {
        formRef.current.requestSubmit();
    }, []);

    return (
        <>
            <form ref={formRef} action={() => {
                signOutAsync();
            }}></form>
        </>
    );
}