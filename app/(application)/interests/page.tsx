import { stardom } from "@/app/layout";
import InterestsSelector from "@/components/InterestSelector";
import Link from "next/link";

export default function InterestsPage() {
    return (
        <>
            <header className="mb-16">
                <nav className="navbar fixed top-0 w-full z-50 bg-base-200 border-b border-gray-200 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    <div className="mx-auto">
                        <Link
                            href="/"
                            className={`${stardom.className} tracking-wide font-bold text-xl`}>
                            ShareAStory
                        </Link>
                    </div>
                </nav>
            </header>
            <main>
                <section className="min-h-dvh relative md:py-6 py-4">
                    <InterestsSelector />
                </section>
            </main>
        </>
    )
}