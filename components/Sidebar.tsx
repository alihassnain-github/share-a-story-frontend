"use client";

import { useSidebar } from "@/context/sidemenu-provider";
import { RiArticleLine, RiBookmarkLine, RiHome4Line, RiUser3Line } from "@remixicon/react";
import Link from "next/link";

export default function Sidebar() {

    const { isOpen, handleToggle } = useSidebar()!;

    return (
        <>

            {/* Sidebar Overlay (for mobile) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={handleToggle}
                ></div>
            )}

            <aside className={`z-70 fixed left-0 bg-base-200 h-full overflow-x-hidden transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "w-64 border-r border-gray-200" : "w-0 border-r-0"}`}>
                <ul className="menu menu-md bg-base-200 rounded-box w-full">
                    <li className="menu-title">Menu</li>
                    <li>
                        <Link href={""} prefetch={false}>
                            <RiHome4Line size={18} />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={""} prefetch={false}>
                            <RiBookmarkLine size={18} />
                            Library
                        </Link>
                    </li>
                    <li>
                        <Link href={""} prefetch={false}>
                            <RiUser3Line size={18} />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={""} prefetch={false}>
                            <RiArticleLine size={18} />
                            Stories
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}