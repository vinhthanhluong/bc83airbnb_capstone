import { create } from 'zustand'

type userManagementStore = {
    isPopup: boolean,
    setIsPopup: () => void,
    // pagi: number,
    // setPagi: (numPagi: number) => void,
    idUser: number,
    setIdUser: (numId: number) => void,
}

export const useUserManagementStore = create<userManagementStore>((set) => ({
    isPopup: false,
    setIsPopup: () => set((state) => ({ isPopup: !state.isPopup })),

    // pagi: 1,
    // setPagi: (numPagi) => set({ pagi: numPagi }),

    idUser: 0,
    setIdUser: (numId) => set({ idUser: numId }),
}))
