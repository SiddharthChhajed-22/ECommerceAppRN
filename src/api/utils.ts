export function getErrorMessage(
    error: unknown,
    fallback = 'Something went wrong. Please try again.',
): string {
    if (error == null) return fallback;
    const err = error as { message?: string; response?: { status?: number; data?: { message?: string; error?: string }; statusText?: string }; code?: string };
    if (typeof err.message === 'string' && err.message.trim()) return err.message;
    if (err.response) {
        const { status, data } = err.response;
        if (data?.message) return data.message;
        if (data?.error) return typeof data?.error === 'string' ? data.error : fallback;
        if (status === 401) return "Invalid email or password.";
        if (status === 403) return 'You are not allowed to perform this action.';
        if (status === 404) return 'The requested resource was not found.';
        if (status != null && status >= 500) return 'Server error. Please try again later.';
        if (err.response.statusText) return err.response.statusText;
    }
    if (err.code === 'ECONNABORTED') return 'Request timed out. Please check your connection.';
    if (err.code === 'ERR_NETWORK' || (typeof err.message === 'string' && err.message.includes('Network Error'))) {
        return 'Network error. Please check your internet connection.';
    }
    return fallback;
}
