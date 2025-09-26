import { listOfRoomCommentApi, removeOfRoomCommentApi } from "@/services/comment.api"
import { showDialog } from "@/utils/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useListOfRoomComment = (id: number, optional?: {}) => {
    return useQuery({
        queryKey: ['list-of-room-comment', id],
        queryFn: () => listOfRoomCommentApi(id),
        enabled: id !== 0,
        ...optional
    })
}

export const useRemoveOfRoomComment = (optional?: {}) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: removeOfRoomCommentApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-of-room-comment'] })
            showDialog({
                title: "Xóa bình luận thành công",
                icon: "success",
            })
        },
        onError: () => {
            showDialog({
                title: "Xóa bình luận thất bại",
                icon: "error",
            })
        },
        ...optional
    })
}