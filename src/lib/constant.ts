const DEFAULT_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function resolveApiBaseUrl() {
    const url = DEFAULT_API_URL;
    if (
        typeof window !== 'undefined' && url && url.startsWith('http://')
    ) {
        console.log("development");   
    }
    return url;
}

export const API_BASE_URL = resolveApiBaseUrl();
export const APP_NAME = 'WAY DEVELOPER';