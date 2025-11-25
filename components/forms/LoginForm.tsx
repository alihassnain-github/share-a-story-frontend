"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import axios from "axios";
import { handleAPIError } from "@/utils/errorHandler";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`;
            const response = await axios.post(url, formData, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                const interests: string[] = response.data.data.user.interests;

                if (interests.length === 0) {
                    router.replace("/interests");
                } else {
                    router.replace("/");
                }
                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error login: ", error);
            handleAPIError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
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
                    value={formData.email}
                    onChange={handleChange}
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
                        value={formData.password}
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

            <p className="text-sm text-right -mt-2">
                <Link href="/forgot" className="link link-primary font-medium">
                    Forgot password?
                </Link>
            </p>

            <button disabled={loading} type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                {loading && <span className="loading loading-spinner loading-xs"></span>} Login
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