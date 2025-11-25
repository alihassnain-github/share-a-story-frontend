import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { isAPIError } from "@/types/Error";

export function handleAPIError(error: unknown): void {
    if (error instanceof AxiosError && error.response?.data) {
        const responseData = error.response.data;

        // Check if it matches our API error structure
        if (isAPIError(responseData)) {
            // Show main error message
            toast(responseData.message, { type: "error" });

            // Show validation errors if any
            if (responseData.errors && responseData.errors.length > 0) {
                responseData.errors.forEach((err) => {
                    toast(`${err.message}`, { type: "error" });
                });
            }
            return;
        }
    }

    // Case 4: Axios error without response (network error, timeout, etc.)
    if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
            toast("Network error. Please check your connection.", { type: "error" });
        } else if (error.code === "ECONNABORTED") {
            toast("Request timeout. Please try again.", { type: "error" });
        } else {
            toast(error.message || "Request failed", { type: "error" });
        }
        return;
    }

    // Case 5: Regular JavaScript Error
    if (error instanceof Error) {
        toast(error.message, { type: "error" });
        return;
    }

    // Case 6: Unknown error type
    toast("An unexpected error occurred", { type: "error" });
}