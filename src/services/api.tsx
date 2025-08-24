import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    timeout: 30000,
});

api.interceptors.request.use((config: any) => {
    return {
        ...config,
        headers: {
            tokenCybersoft: import.meta.env.VITE_URL_TOKEN
        }
    }
});


export default api;
