import { LoginApi } from "@/services/auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";

type LoginResquest = {
    email: string,
    password: string,
}

export const useLoginForm = (optional?: {}) => {
    return useMutation({
        mutationFn: (data:LoginResquest) => LoginApi(data),
        onSuccess: () => {
            console.log('dang nhap thanh cong');
        },
        onError: (error: any) => {
            console.log("🌲 ~ error:", error)
        },
        ...optional
    })
}

