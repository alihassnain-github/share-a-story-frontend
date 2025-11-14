"use client";

export default function OTPVerificationForm() {

    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="label">
                    <span className="label-text font-medium">
                        Enter OTP *
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
                Verify
            </button>
        </form>
    )
}