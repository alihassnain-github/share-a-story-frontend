"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type OTPInputProps = {
    length?: number;
    onComplete: (otp: string) => void;
    onChange?: (otp: string, meta: { isComplete: boolean }) => void;
    className?: string;
};

export default function OTPInput({
    length = 6,
    onComplete,
    onChange,
    className = "",
}: OTPInputProps) {
    const [values, setValues] = useState<string[]>(() => Array.from({ length }, () => ""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const lastCompleted = useRef("");

    useEffect(() => {
        setValues((prev) => {
            const next = Array.from({ length }, (_, index) => prev[index] ?? "");
            lastCompleted.current = "";
            return next;
        });
    }, [length]);

    const focusInput = useCallback((index: number) => {
        inputRefs.current[index]?.focus();
        inputRefs.current[index]?.select();
    }, []);

    const handleValueChange = useCallback(
        (index: number, rawValue: string) => {
            const sanitized = rawValue.replace(/\D/g, "");
            const digit = sanitized.slice(-1) ?? "";

            setValues((prev) => {
                if (prev[index] === digit) {
                    return prev;
                }

                const next = [...prev];
                next[index] = digit;
                return next;
            });

            if (digit && index < length - 1) {
                focusInput(index + 1);
            }
        },
        [focusInput, length],
    );

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
            if (event.key === "Backspace") {
                if (values[index]) {
                    event.preventDefault();
                    setValues((prev) => {
                        if (!prev[index]) {
                            return prev;
                        }
                        const next = [...prev];
                        next[index] = "";
                        return next;
                    });
                } else if (index > 0) {
                    event.preventDefault();
                    focusInput(index - 1);
                }
            } else if (event.key === "ArrowLeft" && index > 0) {
                event.preventDefault();
                focusInput(index - 1);
            } else if (event.key === "ArrowRight" && index < length - 1) {
                event.preventDefault();
                focusInput(index + 1);
            }
        },
        [focusInput, length, values],
    );

    const handlePaste = useCallback(
        (event: React.ClipboardEvent<HTMLInputElement>, index: number) => {
            event.preventDefault();
            const clipboardData = event.clipboardData.getData("text").replace(/\D/g, "");
            if (!clipboardData) {
                return;
            }

            setValues((prev) => {
                const next = [...prev];
                let cursor = index;

                for (const char of clipboardData) {
                    if (cursor >= length) {
                        break;
                    }
                    next[cursor] = char;
                    cursor += 1;
                }

                if (cursor <= length - 1) {
                    focusInput(cursor);
                } else {
                    inputRefs.current[length - 1]?.blur();
                }

                return next;
            });
        },
        [focusInput, length],
    );

    useEffect(() => {
        const otp = values.join("");
        const isComplete = values.every((value) => value !== "");

        onChange?.(otp, { isComplete });

        if (isComplete && otp.length === length && otp !== lastCompleted.current) {
            lastCompleted.current = otp;
            onComplete(otp);
        }

        if (!isComplete) {
            lastCompleted.current = "";
        }
    }, [length, onChange, onComplete, values]);

    return (
        <div className={`flex gap-2 ${className}`}>
            {values.map((value, index) => (
                <input
                    key={index}
                    ref={(node) => {
                        inputRefs.current[index] = node;
                    }}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={1}
                    value={value}
                    className="input input-bordered w-12 text-center text-lg font-semibold"
                    onChange={(event) => handleValueChange(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    onPaste={(event) => handlePaste(event, index)}
                    onFocus={(event) => event.currentTarget.select()}
                    aria-label={`Digit ${index + 1}`}
                />
            ))}
        </div>
    );
}