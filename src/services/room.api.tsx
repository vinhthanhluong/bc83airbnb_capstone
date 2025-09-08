import type { BaseApiResponse } from "@/interface/base.interface"
import type { RoomItem } from "@/interface/room.interface"
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