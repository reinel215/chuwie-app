import create from 'zustand'
import { registerUser } from '../services/user/registerUser';
import { UserFormData, UserFormRequest, UserRole } from '../types/share/ITextInput/User';



interface UseUserStoreSate {
    isAuth: boolean,
    setAuth: (isAuth: boolean) => void;
    loadingRegisterUser: boolean;
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => void;
    registerUser: (user: UserFormData) => void;
}


export const useUserStore = create<UseUserStoreSate>((set) => ({
    isAuth: false,
    setAuth: (isAuth) => set({ isAuth }),
    loadingRegisterUser: false,
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => set({ loadingRegisterUser }),
    registerUser: async (user: UserFormData) => {
        try {
            set({loadingRegisterUser: true});
            const userRequest: UserFormRequest = {
                ...user,
                role: user.role.value as UserRole
            }
            await registerUser(userRequest)

        } catch (error) {
            throw error;
        }finally {
            set({loadingRegisterUser: false});
        }
    },
}))