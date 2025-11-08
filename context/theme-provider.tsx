"use client";

import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContext {
    theme: string;
    toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });
    // const [theme, setTheme] = useState<string>("light");

    // useEffect(() => {
    //     const storedTheme = localStorage.getItem("theme");
    //     if (storedTheme) {
    //         setTheme(storedTheme);
    //     }
    // }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    function toggleTheme(e: ChangeEvent<HTMLInputElement>) {
        setTheme(e.target.checked ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}

