"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContext {
    isOpen: boolean;
    handleToggle: () => void;
}

const SidebarContext = createContext<SidebarContext | null>(null);

export default function SidebarProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <SidebarContext.Provider value={{ isOpen, handleToggle }}>
            <Navbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className={`flex-1 ${isOpen ? "ms-64" : "ms-0"} transition-[margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}>
                    <main>{children}</main>
                </div>
            </div>
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    return useContext(SidebarContext);
}