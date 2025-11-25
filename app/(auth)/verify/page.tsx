import { stardom } from "@/app/layout";
import OTPVerificationForm from "@/components/forms/OTPVerificationForm";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";

export default async function VerifyPage() {

    const cookieStore = await cookies();

    const email = cookieStore.get("email");

    if (!email) {
        redirect("/register", RedirectType.replace);
    }

    return (
        <main>
            <section className="min-h-dvh grid md:grid-cols-2 relative">
                {/* Mobile background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center md:hidden"
                    style={{
                        backgroundImage:
                            "url('/images/01.webp')",
                    }}
                />
                <div className="absolute inset-0 bg-base-100/80 backdrop-blur-sm md:hidden" />

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
                            We sent a 6-digit code to {email.value}. Please enter it to verify your account
                        </p>

                        {/* OTP Form */}
                        <OTPVerificationForm email={email.value} />

                    </div>
                </div>

                {/* Right: Image (desktop) */}
                <div className="hidden md:block min-h-dvh">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('/images/01.webp')",
                        }}
                    />
                </div>
            </section>
        </main>
    )
}