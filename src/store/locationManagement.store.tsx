import { create } from 'zustand'

type locationManagementStore = {
    isPopup: boolean,
    setIsPopup: () => void,

    idLocation: number,
    setIdLocation: (numId: number) => void,
}

export const locationManagementStore = create<locationManagementStore>((set) => ({
    isPopup: false,
    setIsPopup: () => set((state) => ({ isPopup: !state.isPopup })),

    idLocation: 0,
    setIdLocation: (numId) => set({ idLocation: numId }),
}))
