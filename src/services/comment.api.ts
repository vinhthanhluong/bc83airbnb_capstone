import type { CommentItem } from "@/interface/comment.interface"
import api from "./api"
import type { BaseApiResponse } from "@/interface/base.interface"

export const listOfRoomCommentApi = async (id: number): Promise<CommentItem[]> => {
    try {
        const response = await api.get<BaseApiResponse<CommentItem[]>>(`binh-luan/lay-binh-luan-theo-phong/${id}`)
        return response.data.content
    } catch (error) {
        console.log("🌲 ~ listOfRoomCommentApi ~ error:", error)
        throw error
    }
}

export const removeOfRoomCommentApi = async (id: number) => {
    try {
        await api.delete(`binh-luan/${id}`)
    } catch (error) {
        console.log("🌲 ~ removeOfRoomCommentApi ~ error:", error)
        throw error
    }
}