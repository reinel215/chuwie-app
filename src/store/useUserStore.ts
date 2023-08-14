import { create } from 'zustand'
import { registerUser } from '../services/user/registerUser'
import { UserFormData, UserFormRequest, UserRole } from '../types/share/User'

interface UseUserStoreSate {
    loadingRegisterUser: boolean
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => void
    registerUser: (user: UserFormData) => void
    userPropertyToUpdate: 'name' | 'lastname'
    setUserPropertyToUpdate: (userPropertyToUpdate: 'name' | 'lastname') => void
}

export const useUserStore = create<UseUserStoreSate>((set) => ({
    loadingRegisterUser: false,
    setLoadingRegisterUser: (loadingRegisterUser: boolean) =>
        set({ loadingRegisterUser }),
    registerUser: async (user: UserFormData) => {
        try {
            set({ loadingRegisterUser: true })
            const userRequest: UserFormRequest = {
                ...user,
                role: user.role.value as UserRole,
            }
            await registerUser(userRequest)
        } catch (error) {
            throw error
        } finally {
            set({ loadingRegisterUser: false })
        }
    },
    userPropertyToUpdate: 'name',
    setUserPropertyToUpdate: (userPropertyToUpdate: 'name' | 'lastname') =>
        set({ userPropertyToUpdate }),
}))
