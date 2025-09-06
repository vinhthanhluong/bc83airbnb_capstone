import type { BaseApiResponse } from "@/interface/base.interface";
import api from "./api"
import type { LocationItem, LocationPagi } from "@/interface/location.interface";

export const listLocationApi = async (pageIndex: number, pageSize: number, keyword?: string): Promise<LocationPagi<LocationItem>> => {
    try {
        const key = keyword ? `&keyword=${keyword}` : "";
        const response = await api.get<BaseApiResponse<LocationPagi<LocationItem>>>(`vi-tri/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}${key}`);
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ listLocationApi ~ error:", error)
        throw error
    }
}

export const detailLocationApi = async (id: number): Promise<LocationItem> => {
    try {
        const response = await api.get<BaseApiResponse<LocationItem>>(`vi-tri/${id}`);
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ detailLocationApi ~ error:", error)
        throw error
    }
}

export const addLocationApi = async (data: LocationItem): Promise<LocationItem> => {
    try {
        const response = await api.post<BaseApiResponse<LocationItem>>(`vi-tri`, data);
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ addLocationApi ~ error:", error)
        throw error
    }
}

export const removeLocationApi = async (id: number) => {
    try {
        const response = await api.delete(`vi-tri/${id}`);
    } catch (error) {
        console.log("🌲 ~ removeLocationApi ~ error:", error)
        throw error
    }
}

export const updateLocationApi = async (data: any) => {
    try {
        const response = await api.put<BaseApiResponse<LocationItem>>(`vi-tri`, data);
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ addLocationApi ~ error:", error)
        throw error
    }
}