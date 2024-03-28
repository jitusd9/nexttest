'use client';

import { useEffect } from "react";

export default function Herosection() {


    useEffect(() => {
        sessionStorage.setItem("name", "Herosection");
    }, []);

    return (
        <>
            <h1>Herosection</h1>
        </>
    )
}
