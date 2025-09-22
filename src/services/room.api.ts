import type { BaseApiResponse } from "@/interface/base.interface"
import type { RoomItem, RoomPagi } from "@/interface/room.interface"
import api from "./api"


export const detailRoomApi = async (id: string): Promise<RoomItem> => {
    try {
        const response = await api.get<BaseApiResponse<RoomItem>>(`phong-thue/${id}`)
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ detailRoomApi ~ error:", error)
        throw error
    }
}

export const locationOfRoomApi = async (id: string): Promise<RoomItem[]> => {
    try {
        const response = await api.get<BaseApiResponse<RoomItem[]>>(`phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
        return response.data.content;
    } catch (error) {
        console.log("🌲 ~ detailRoomApi ~ error:", error)
        throw error
    }
}

export const listRoomApi = async (pageIndex: number, pageSize: number, keyword?: string): Promise<RoomPagi<RoomItem[]>> => {
    const key = keyword ? `&keyword=${keyword}` : '';
    try {
        const response = await api.get<BaseApiResponse<RoomPagi<RoomItem[]>>>(`phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}${key}`);
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ listRoomApi ~ error:", error)
        throw error
    }
}