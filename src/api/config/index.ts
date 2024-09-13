import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REST_REDBERRY_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const protectedEndpoints = [
        '/agents',
        '/real-estates',
    ];

    if (protectedEndpoints.some((endpoint) => config.url?.includes(endpoint))) {
        const token = import.meta.env.VITE_REST_REDBERRY_API_TOKEN;

        config.headers.set('Authorization', `Bearer: ${token}`);
    };

    return config;
});

export default axiosInstance;
