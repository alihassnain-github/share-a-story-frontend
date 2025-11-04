"use client";

import { useState } from "react";
import Link from "next/link";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

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

            <div>
                <label htmlFor="password" className="label">
                    <span className="label-text font-medium">
                        Password *
                    </span>
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        required
                        className="input input-bordered w-full pr-12"
                        id="password"
                        name="password"
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="btn btn-ghost btn-sm absolute right-1 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword((v) => !v)}
                    >
                        {showPassword ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
                    </button>
                </div>
            </div>

            <p className="text-sm text-right -mt-2">
                <Link href="/forgot" className="link link-primary font-medium">
                    Forgot password?
                </Link>
            </p>

            <button type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                Login
            </button>

            <p className="text-sm text-base-content/70 pt-1">
                Don't have an account?{" "}
                <Link href="/register" className="link link-primary font-medium">
                    Register
                </Link>
            </p>
        </form>
    )
}