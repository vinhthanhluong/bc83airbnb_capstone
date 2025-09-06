import { useQuery } from "@tanstack/react-query"
import { detailRoomApi } from "@/services/room.api"

export const useDetailRoom = (id: string, optional?: {}) => {
    return useQuery({
        queryKey: ['detail-room', id],
        queryFn: () => detailRoomApi(id),
        enabled: !!id,
        ...optional
    })
}