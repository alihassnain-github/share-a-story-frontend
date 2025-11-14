import { stardom } from "@/app/layout";
import OTPVerificationForm from "@/components/forms/OTPVerificationForm";
import Link from "next/link";

export default function VerifyPage() {
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
                            Verify Your Email
                        </h1>
                        <p className="text-sm text-base-content/70 mb-8">
                            We sent a 6-digit code to example@mail.com. Please enter it to verify your account
                        </p>

                        {/* OTP Form */}
                        <OTPVerificationForm />

                    </div>
                </div>
            </section>
        </main>
    )
}