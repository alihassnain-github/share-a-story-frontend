"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { toast } from "react-toastify";
import axios from "axios";
import { handleAPIError } from "@/utils/errorHandler";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`;
            const response = await axios.post(url, formData, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                router.replace("/verify");
                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error register: ", error);
            handleAPIError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="label">
                        <span className="label-text font-medium">
                            First name *
                        </span>
                    </label>
                    <input
                        type="text"
                        required
                        className="input input-bordered w-full"
                        id="firstName"
                        name="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="label">
                        <span className="label-text font-medium">
                            Last name *
                        </span>
                    </label>
                    <input
                        type="text"
                        required
                        className="input input-bordered w-full"
                        id="lastName"
                        name="lastName"
                        onChange={handleChange}
                    />
                </div>
            </div>

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
                        minLength={8}
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

            <button type="submit" disabled={loading} className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                {loading && <span className="loading loading-spinner loading-xs"></span>} Next
            </button>

            <p className="text-sm text-base-content/70 pt-1">
                Already have an account?{" "}
                <Link href="/login" className="link link-primary font-medium">
                    Log in
                </Link>
            </p>
        </form>
    )
}