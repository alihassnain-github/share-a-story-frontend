"use client";

import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

export default function ForgotPasswordForm() {

    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="label">
                    <span className="label-text font-medium">
                        Email *
                    </span>
                </label>
                <input
                    type="email"
                    required
                    className="input input-bordered w-full"
                    id="email"
                    name="email"
                    autoComplete="email"
                />
            </div>

            <button type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                Reset Password
            </button>

            <p className="text-sm text-base-content/70 pt-1">
                <Link href="/login" className="link link-primary font-medium flex items-center gap-2">
                    <RiArrowLeftLine size={16} />
                    Back to login
                </Link>
            </p>
        </form>
    )
}