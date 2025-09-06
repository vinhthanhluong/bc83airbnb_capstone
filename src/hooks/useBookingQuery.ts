import { detailBookingApi, removeBookingApi } from "@/services/booking.api"
import { bookingManagementStore } from "@/store/bookingManagement.store"
import { showDialog } from "@/utils/dialog"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useDetailBooking = (id: string, optional?: {}) => {
    return useQuery({
        queryKey: ['detail-booking', id],
        queryFn: () => detailBookingApi(id),
        enabled: !!id,
        ...optional
    })
}

export const useRemoveBooking = (optional?: {}) => {
    const queryClient = useQueryClient();
    const { setIsPopup } = bookingManagementStore();
    return useMutation({
        mutationFn: removeBookingApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['detail-booking'] })
            showDialog({
                title: 'Xoá thành công',
                icon: 'success',
            })
        },
        onError: (error: any) => {
            setIsPopup()
            showDialog({
                title: 'Xóa thất bại',
                icon: 'error',
                text: error?.response?.data?.content
            })
        },
        ...optional
    })
}