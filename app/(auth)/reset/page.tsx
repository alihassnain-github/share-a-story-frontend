import { stardom } from "@/app/layout";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main>
            <section className="min-h-dvh grid md:grid-cols-1 relative">

                {/* Left: Form */}
                <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
                    <div className="w-full max-w-xl">
                        <div className="mb-8">
                            <Link
                                href="/"
                                className={`${stardom.className} tracking-wide font-bold text-xl`}
                            >
                                ShareAStory
                            </Link>
                        </div>

                        <h1 className="text-3xl font-semibold text-base-content mb-2">
                            Reset Password
                        </h1>
                        <p className="text-sm text-base-content/70 mb-8">
                            Your new password must be different from previous used passwords.
                        </p>

                        {/* Rest Form */}
                        <ResetPasswordForm />

                    </div>
                </div>
            </section>
        </main>
    )
}