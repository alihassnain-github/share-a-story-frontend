import { stardom } from "@/app/layout";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-neutral text-neutral-content border-t border-gray-800">
            <div>
                <Link
                    href="/"
                    className={`${stardom.className} tracking-wide font-bold text-xl`}>
                    ShareAStory
                </Link>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div>
                <p className="tracking-wide text-md">About Developer</p>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/alihassnain-webdev/" title="Linkedin" target="_blank">
                        <RiLinkedinFill />
                    </a>
                    <a href="https://github.com/alihassnain-github" title="Github" target="_blank">
                        <RiGithubFill />
                    </a>
                </div>
            </div>
        </footer>
    )
}