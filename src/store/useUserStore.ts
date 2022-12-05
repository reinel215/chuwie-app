import create from 'zustand'



interface UseUserStoreSate {
    isAuth: boolean,
    setAuth: (isAuth: boolean) => void;
}


export const useUserStore = create<UseUserStoreSate>((set) => ({
    isAuth: false,
    setAuth: (isAuth) => set({ isAuth })
}))