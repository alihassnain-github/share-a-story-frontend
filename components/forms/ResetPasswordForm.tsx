"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import axios from "axios";
import { handleAPIError } from "@/utils/errorHandler";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ResetPasswordFormProps {
    token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {

    const router = useRouter();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/reset-password`;
            const response = await axios.post(url, { ...formData, token }, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                router.replace("/login");
                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error reset password: ", error);
            handleAPIError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="password" className="label">
                    <span className="label-text font-medium">
                        New Password *
                    </span>
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        required
                        className="input input-bordered w-full pr-12"
                        id="password"
                        name="password"
                        onChange={handleChange}
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
                <label htmlFor="confirmPassword" className="label">
                    <span className="label-text font-medium">
                        Confirm New Password *
                    </span>
                </label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        className="input input-bordered w-full pr-12"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
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

            <button disabled={loading} type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                {loading && <span className="loading loading-spinner loading-xs"></span>} Reset Password
            </button>
        </form>
    )
}