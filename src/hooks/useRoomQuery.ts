import { useQuery } from "@tanstack/react-query"
import { detailRoomApi, listRoomApi, locationOfRoomApi } from "@/services/room.api"

export const useDetailRoom = (id: string, optional?: {}) => {
    return useQuery({
        queryKey: ['detail-room', id],
        queryFn: () => detailRoomApi(id),
        enabled: !!id,
        ...optional
    })
}

export const useLocationOfRoom = (id: string, optional?: {}) => {
    return useQuery({
        queryKey: ['location-room', id],
        queryFn: () => locationOfRoomApi(id),
        enabled: !!id,
        ...optional
    })
}

export const useListRoom = (pageIndex: number, pageSize: number, keyword?: string, optional?: {}) => {
    return useQuery({
        queryKey: ['list-room', pageIndex, pageSize, keyword],
        queryFn: () => listRoomApi(pageIndex, pageSize, keyword),
        enabled: !!pageIndex,
        ...optional
    })
}
