import create from 'zustand'
import { getCurrentUser } from '../services/user/getCurrentUser';
import { registerUser } from '../services/user/registerUser';
import { UserFormData, UserFormRequest, UserRole } from '../types/share/User';
import { User } from '../types/share/User';
import { useTokenStore } from './token/useTokenStore';



interface UseUserStoreSate {

    loadingRegisterUser: boolean;
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => void;
    registerUser: (user: UserFormData) => void;
    loadingGetUser: boolean;
    getCurrentUserFetch: () => Promise<void>;
    user: User | null;

}


export const useUserStore = create<UseUserStoreSate>((set) => ({

    loadingRegisterUser: false,
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => set({ loadingRegisterUser }),
    registerUser: async (user: UserFormData) => {
        try {
            set({ loadingRegisterUser: true });
            const userRequest: UserFormRequest = {
                ...user,
                role: user.role.value as UserRole
            }
            await registerUser(userRequest)

        } catch (error) {
            throw error;
        } finally {
            set({ loadingRegisterUser: false });
        }
    },
    loadingGetUser: false,
    getCurrentUserFetch: async () => {
        try {
            set({ loadingGetUser: true });
            const token = useTokenStore.getState().accessToken;
            const user = await getCurrentUser({ token })
            set({ user })

        } catch (error) {
            throw error;
        } finally {
            set({ loadingGetUser: false });
        }
    },
    user: null
}))