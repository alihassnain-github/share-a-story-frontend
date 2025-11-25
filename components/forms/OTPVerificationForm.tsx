"use client";

import { FormEvent, useState } from "react";
import OTPInput from "../OTPInput";
import { handleAPIError } from "@/utils/errorHandler";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const OTP_LENGTH = 6;

interface OTPVerificationFormProps {
    email: string;
}

export default function OTPVerificationForm({ email }: OTPVerificationFormProps) {

    const router = useRouter();

    const [otp, setOtp] = useState("");
    const [isOtpComplete, setIsOtpComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isOtpComplete) {
            return;
        }

        try {
            setLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`;
            const response = await axios.post(url, { email, otp }, { withCredentials: true });

            if (response.data?.success) {
                const { message } = await response.data;

                router.replace("/login");
                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error verify: ", error);
            handleAPIError(error);
        } finally {
            setLoading(false);
        }
    }

    async function handleResendOTP() {
        try {
            setResendLoading(true);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/resend-otp`;
            const response = await axios.post(url, { email }, { withCredentials: true });

            if (response.data?.success) {
                const { message } = response.data;
                toast(message, { type: "success" });
            }
        } catch (error: unknown) {
            console.error("Error resend OTP: ", error);
            handleAPIError(error);
        } finally {
            setResendLoading(false);
        }
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="otp" className="label">
                    <span className="label-text font-medium">
                        Enter OTP *
                    </span>
                </label>
                <OTPInput
                    length={OTP_LENGTH}
                    onChange={(value, { isComplete }) => {
                        setIsOtpComplete(isComplete);
                        if (!isComplete) {
                            setOtp("");
                        }
                    }}
                    onComplete={(value) => {
                        setOtp(value);
                        setIsOtpComplete(true);
                    }}
                />
            </div>

            <div className="text-right mt-2">
                <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-sm text-base-content/70 hover:text-base-content underline disabled:no-underline disabled:opacity-50 transition-colors"
                    disabled={resendLoading || loading}
                >
                    {resendLoading ? (
                        <span className="flex items-center gap-2 justify-end">
                            <span className="loading loading-spinner loading-xs"></span>
                            <span>Sending...</span>
                        </span>
                    ) : (
                        "Didn't receive code? Resend"
                    )}
                </button>
            </div>

            <button
                type="submit"
                className="btn btn-neutral min-w-32 font-medium tracking-wide mt-4"
                disabled={!isOtpComplete || loading || resendLoading}
            >
                {loading && <span className="loading loading-spinner loading-xs"></span>} Verify
            </button>
        </form>
    );
}