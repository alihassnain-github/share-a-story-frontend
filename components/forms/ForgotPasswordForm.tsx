"use client";

import { handleAPIError } from "@/utils/errorHandler";
import { RiArrowLeftLine } from "@remixicon/react";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function ForgotPasswordForm() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/forgot-password`;
            const response = await axios.post(url, { email }, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error forgot password: ", error);
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
                    onChange={handleChange}
                />
            </div>

            <button disabled={loading} type="submit" className="btn btn-neutral min-w-32 font-medium tracking-wide mt-2">
                {loading && <span className="loading loading-spinner loading-xs"></span>} Reset Password
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