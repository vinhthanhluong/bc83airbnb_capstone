import { create } from 'zustand'

type userManagementStore = {
    isPopup: boolean,
    setIsPopup: () => void,

    pagi: number,
    setPagi: (numPagi: number) => void,
}

export const useUserManagementStore = create<userManagementStore>((set) => ({
    isPopup: false,
    setIsPopup: () => set((state) => ({ isPopup: !state.isPopup })),

    pagi: 1,
    setPagi: (numPagi) => set({ pagi: numPagi }),
}))

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0Njk0IiwiZW1haWwiOiJ0ZXN0MDEwOUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE3NTY3MzI0NzcsImV4cCI6MTc1NzMzNzI3N30.xvd8g6QSVphXROlO-qKXwbqowlwOJhx_2_YqU848zOc