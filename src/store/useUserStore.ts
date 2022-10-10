import create from 'zustand'



interface UseUserStoreSate {
    isAuth: boolean,
    setAuth: (isAuth: boolean) => void;
}


export const useUserStore = create<UseUserStoreSate>((set) => ({
    isAuth: true,
    setAuth: (isAuth) => set({ isAuth })
}))