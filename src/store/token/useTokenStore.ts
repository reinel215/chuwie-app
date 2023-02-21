import create from 'zustand'



interface UseUserStoreSate {
    accessToken: string,
    setAccessToken: (accessToken: string) => void;
    isAuth: boolean,
    setAuth: (isAuth: boolean) => void;
}


export const useTokenStore = create<UseUserStoreSate>((set) => ({
    accessToken: "",
    setAccessToken: (accessToken: string) => set({ accessToken }),
    isAuth: false,
    setAuth: (isAuth) => set({ isAuth }),
}))