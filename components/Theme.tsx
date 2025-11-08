"use client";

import { useTheme } from "@/context/theme-provider";
import { RiMoonLine, RiSunLine } from "@remixicon/react";

export default function Theme() {

    const { theme, toggleTheme } = useTheme()!;

    return (
        <label className="swap swap-rotate btn btn-ghost btn-circle lg:btn-md btn-sm" role="button">
            <input
                type="checkbox"
                className="theme-controller"
                name="theme"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />

            {/* sun icon */}
            <RiSunLine size={18} className="swap-off fill-current" />

            {/* moon icon */}
            <RiMoonLine size={18} className="swap-on fill-current" />
        </label>
    )
}