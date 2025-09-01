import type { BaseApiResponse } from "@/interface/base.interface";
import api from "./api"
import type { ListUser, ListUserPagi, UserPostResponse, UserPutResponse } from "@/interface/user.interface";

export const listUserPagiApi = async (pageIndex: number, pageSize: number): Promise<ListUserPagi<ListUser>> => {
    try {
        const response = await api.get<BaseApiResponse<ListUserPagi<ListUser>>>(`users/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ userPagiApi ~ error:", error)
        throw error
    }
}

export const detailUserApi = async (id: number) => {
    try {
        const response = await api.get<BaseApiResponse<ListUser>>(`users/${id}`);
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ userPagiApi ~ error:", error)
        throw error
    }
}

export const addUserApi = async (data: any): Promise<UserPostResponse> => {
    try {
        const response = await api.post<BaseApiResponse<UserPostResponse>>(`users`, data);
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ UserPostApi ~ error:", error)
        throw error
    }
}

export const removeUserApi = async (id: number) => {
    try {
        const response = await api.delete(`users?id=${id}`);
    } catch (error) {
        console.log("🌲 ~ removeUserApi ~ error:", error)
        throw error
    }
}



export const updateUserApi = async (id: number, data: UserPutResponse): Promise<UserPutResponse> => {
    try {
        const response = await api.put<BaseApiResponse<UserPutResponse>>(`users/${id}`, data);
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ removeUserApi ~ error:", error)
        throw error
    }
}


