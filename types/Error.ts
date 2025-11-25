export interface ValidationError {
    field: string;
    message: string;
}

export interface APIError {
    success: boolean;
    statusCode: number;
    message: string;
    errors: ValidationError[];
}

// Type guard
export function isAPIError(error: unknown): error is APIError {
    return (
        typeof error === "object" &&
        error !== null &&
        "success" in error &&
        "message" in error &&
        "statusCode" in error &&
        "errors" in error &&
        Array.isArray((error as APIError).errors)
    );
}