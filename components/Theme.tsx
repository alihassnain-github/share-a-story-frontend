"use client";

import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { ChangeEvent, useEffect, useState } from "react";

export default function Theme() {

    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    function handleToggle(e: ChangeEvent<HTMLInputElement>) {
        setTheme(e.target.checked ? "dark" : "light");
    }

    return (
        <label className="swap swap-rotate btn btn-ghost btn-circle lg:btn-md btn-sm" role="button">
            <input
                type="checkbox"
                className="theme-controller"
                name="theme"
                onChange={handleToggle}
                checked={theme === "dark"}
            />

            {/* sun icon */}
            <RiSunLine size={18} className="swap-off fill-current" />

            {/* moon icon */}
            <RiMoonLine size={18} className="swap-on fill-current" />
        </label>
    )
}