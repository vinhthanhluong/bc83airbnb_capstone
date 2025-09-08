import type { BaseApiResponse } from "@/interface/base.interface"
import type { BookingItem } from "@/interface/booking.interface"
import api from "./api"


export const detailBookingApi = async (id: string): Promise<BookingItem[]> => {
    try {
        const response = await api.get<BaseApiResponse<BookingItem[]>>(`dat-phong/lay-theo-nguoi-dung/${id}`)
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ detailBookingApi ~ error:", error)
        throw error
    }
}

export const addBookingApi = async (data: any): Promise<BookingItem> => {
    try {
        const response = await api.post<BaseApiResponse<BookingItem>>(`dat-phong/`, data)
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ addBookingApi ~ error:", error)
        throw error
    }
}

export const removeBookingApi = async (id: string) => {
    try {
        await api.delete<BaseApiResponse<BookingItem[]>>(`dat-phong/${id}`)
    } catch (error) {
        console.log("🌲 ~ removeBookingApi ~ error:", error)
        throw error
    }
}