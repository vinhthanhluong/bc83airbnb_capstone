import type { BaseApiResponse } from "@/interface/base.interface"
import type { AuthApiResponse, CurrentUser } from "@/interface/auth.interface"
import api from "./api"

type LoginResquest = {
    email: string,
    password: string,
}

export const LoginApi = async (data: LoginResquest) => {
    try {
        const response = await api.post<BaseApiResponse<AuthApiResponse<CurrentUser>>>(`auth/signin`, data);
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ LoginApi ~ error:", error)
        throw error
    }
}