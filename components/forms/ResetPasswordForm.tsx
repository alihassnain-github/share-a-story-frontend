"use client";

import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

export default function ResetPasswordForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="newPassword" className="label">
                    <span className="label-text font-medium">
                        New Password *
                    </span>
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        required
                        className="input input-bordered w-full pr-12"
                        id="newPassword"
                        name="newPassword"
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

            <div>
                <label htmlFor="confirmNewPassword" className="label">
                    <span className="label-text font-medium">
                        Confirm New Password *
                    </span>
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        className="input input-bordered w-full pr-12"
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                    />
                    <button
                        type="button"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        className="btn btn-ghost btn-sm absolute right-1 top-1/2 -translate-y-1/2"
                        onClick={() => setShowConfirmPassword((v) => !v)}
                    >
                        {showConfirmPassword ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
                    </button>
                </div>
            </div>

            <button type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                Reset Password
            </button>
        </form>
    )
}