import type { AuthApiResponse, CurrentUser } from "@/interface/auth.interface";
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
    timeout: 30000,
});

api.interceptors.request.use((config: any) => {
    const userLocal: string | null = localStorage.getItem('user');
    const userParsed: AuthApiResponse<CurrentUser> = userLocal ? JSON.parse(userLocal) : null;
    const userToken = userParsed ? userParsed.token : null;

    return {
        ...config,
        headers: {
            tokenCybersoft: import.meta.env.VITE_URL_TOKEN,
            token: userToken ? `Bearer ${userToken}` : ''
        }
    }
});


export default api;
