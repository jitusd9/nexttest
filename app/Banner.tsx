'use client';

import { useEffect } from "react";

export default function Herosection() {
    const id = sessionStorage.getItem("name");


    useEffect(() => {
        if (!id) {
            throw new Error("No id found")
        }
    }, []);

    return (
        <>
            <h1>Herosection</h1>
        </>
    )
}
