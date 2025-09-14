import { addLocationApi, detailLocationApi, listLocationApi, removeLocationApi, updateLocationApi } from "@/services/location.api"
import { locationManagementStore } from "@/store/locationManagement.store"
import { showDialog } from "@/utils/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useListLocation = (pageIndex: number, pageSize: number, keyword?: string, optional?: {}) => {
    return useQuery({
        queryKey: ['list-location', pageIndex, pageSize, keyword],
        queryFn: () => listLocationApi(pageIndex, pageSize, keyword),
        ...optional
    })
}

export const useDetailLocation = (id: number, optional?: {}) => {
    return useQuery({
        queryKey: ['detail-location', id],
        queryFn: () => detailLocationApi(id),
        enabled: id !== 0,
        ...optional
    })
}

export const useAddLocation = (optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = locationManagementStore();

    return useMutation({
        mutationFn: addLocationApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-location'] })
            setIsPopup()
            showDialog({
                title: 'Tạo vị trí thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Tạo vị trí thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}


export const useRemoveLocation = (optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = locationManagementStore();

    return useMutation({
        mutationFn: removeLocationApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-location'] })
            setIsPopup()
            showDialog({
                title: 'Xoá vị trí thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Xóa vị trí thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}

export const useUpdateLocation = (id: number, data: any, optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = locationManagementStore();

    return useMutation({
        mutationFn: ({ id, data }: any) => updateLocationApi(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-location'] })
            setIsPopup()
            showDialog({
                title: 'Cập nhật vị trí thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Cập nhật vị trí thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}