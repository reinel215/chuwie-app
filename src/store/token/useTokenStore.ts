import create from 'zustand'



interface UseUserStoreSate {
    accessToken: string,
    setAccessToken: (accessToken: string) => void;
}


export const useTokenStore = create<UseUserStoreSate>((set) => ({
    accessToken: "",
    setAccessToken: (accessToken: string) => set({ accessToken })
}))