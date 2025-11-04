import { stardom } from "@/app/layout";
import { RiArrowRightUpLine, RiBookMarkedLine, RiLogoutCircleLine, RiUserLine } from "@remixicon/react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar fixed top-0 w-full z-50 bg-base-100 shadow-sm px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex-1">
                <Link
                    href="/"
                    className={`${stardom.className} tracking-wide font-bold text-xl`}>
                    ShareAStory
                </Link>
            </div>
            <div className="flex items-center">

                <div className="me-2">
                    <button className="btn btn-ghost lg:btn-md btn-sm font-medium">
                        <Link
                            href={""}
                            prefetch={false}
                        >
                            Create
                        </Link>
                    </button>
                    <button className="btn btn-ghost lg:btn-md btn-sm font-medium">
                        <Link
                            href={""}
                            prefetch={false}
                        >
                            Explore
                            <RiArrowRightUpLine size={14} className="ms-2 text-gray-500 inline" />
                        </Link>
                    </button>
                </div>

                <div className="flex gap-2">
                    <button className="btn btn-neutral lg:btn-md btn-sm font-medium">
                        <Link
                            href={"/login"}
                        >
                            Sign in
                        </Link>
                    </button>
                    <button className="btn lg:btn-md btn-sm font-medium">
                        <Link
                            href={"/register"}
                        >
                            Create an account
                        </Link>
                    </button>
                </div>

                {/* <div className="dropdown dropdown-end">
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
                </div> */}
            </div>
        </nav>
    )
}