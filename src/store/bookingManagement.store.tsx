import { create } from 'zustand'

type bookingManagementStoreProps = {
    isPopup: boolean,
    setIsPopup: () => void,

    idBooking: number | undefined,
    setIdBooking: (numId: number | undefined) => void,
}

export const bookingManagementStore = create<bookingManagementStoreProps>((set) => ({
    isPopup: false,
    setIsPopup: () => set((state) => ({ isPopup: !state.isPopup })),

    idBooking: 0,
    setIdBooking: (numId) => set({ idBooking: numId }),
}))
