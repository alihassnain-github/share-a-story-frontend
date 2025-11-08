"use client";

import { RiBookMarkedLine, RiLogoutCircleLine, RiMenu4Fill, RiQuillPenAiLine, RiSearch2Line, RiUserLine } from "@remixicon/react";
import Link from "next/link";
import Theme from "./Theme";
import { useSidebar } from "@/context/sidemenu-provider";
import { stardom } from "@/lib/fonts/stardom";

export default function Navbar() {

    const { isOpen, handleToggle } = useSidebar()!;

    return (
        <header className="mb-[64px]">
            <nav className="navbar fixed top-0 w-full z-50 bg-base-200 border-b border-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <div className="flex-none">
                    <button className="pe-3 py-2 cursor-pointer" onClick={handleToggle} title={`${isOpen ? "Close Sidebar" : "Open Sidebar"}`} type="button">
                        <RiMenu4Fill />
                    </button>
                </div>
                <div className="flex-1">
                    <Link
                        href="/"
                        className={`${stardom.className} tracking-wide font-bold text-xl`}>
                        ShareAStory
                    </Link>
                </div>
                <div className="flex items-center gap-3">

                    <Link
                        href={""}
                        prefetch={false}
                        className="lg:inline hidden"
                    >
                        <button className="btn btn-ghost lg:btn-md btn-sm font-medium">
                            <RiQuillPenAiLine size={16} />
                            Create
                        </button>
                    </Link>

                    <button className="btn btn-ghost btn-circle lg:btn-md btn-sm lg:hidden">
                        <RiSearch2Line size={18} />
                    </button>

                    <Theme />

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow">
                            <li>
                                <div>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block">Ali Hassnain</span>
                                        <span className="text-xs">alimurtaza32721@gmail.com</span>
                                    </div>
                                </div>
                            </li>
                            <div className="divider my-0"></div>
                            <li>
                                <a>
                                    <RiUserLine size={18} />
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a>
                                    <RiBookMarkedLine size={18} />
                                    Saved
                                </a>
                            </li>
                            <li>
                                <a>
                                    <RiLogoutCircleLine size={18} />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}