import type { UpdateUserVars, UserPutResponse } from "@/interface/user.interface"
import { listUserPagiApi, addUserApi, removeUserApi, detailUserApi, updateUserApi } from "@/services/user.api"
import { useUserManagementStore } from "@/store/userManagement.store"
import { showDialog } from "@/utils/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"



export const useListUserPagi = (pageIndex: number, pageSize: number, optional?: {}) => {
    return useQuery({
        queryKey: ['list-user', pageIndex, pageSize],
        queryFn: () => listUserPagiApi(pageIndex, pageSize),
        ...optional
    })
}

export const useDetailUser = (id: number, optional?: {}) => {
    return useQuery({
        queryKey: ['detail-user', id],
        queryFn: () => detailUserApi(id),
        ...optional
    })
}


export const useAddUser = (optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = useUserManagementStore();

    return useMutation({
        mutationFn: addUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-user'] })
            setIsPopup()
            showDialog({
                title: 'Tạo người dùng thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Tạo người dùng thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}

export const useRemoveUser = (optional?: {}) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: removeUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-user'] })
            showDialog({
                title: 'Xóa người dùng thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            showDialog({
                title: 'Xóa người dùng thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}

export const useUpdateUser = (optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = useUserManagementStore();
    return useMutation({
        mutationFn: ({ id, data }: UpdateUserVars) => updateUserApi(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['list-user'] })
            setIsPopup()
            showDialog({
                title: 'Cập nhật người dùng thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Cập nhật người dùng thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}