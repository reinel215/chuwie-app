import { create } from 'zustand'
import { getCurrentUser } from '../services/user/getCurrentUser'
import { registerUser } from '../services/user/registerUser'
import { updateUser as updateUserService } from '../services/user/updateUser'
import { UserFormData, UserFormRequest, UserRole } from '../types/share/User'
import { User } from '../types/share/User'

interface UseUserStoreSate {
    loadingRegisterUser: boolean
    setLoadingRegisterUser: (loadingRegisterUser: boolean) => void
    registerUser: (user: UserFormData) => void
    user: User | null
    loadingUpdateUser: boolean
    updateUser: (newUserPropertyValue: string) => Promise<void>
    userPropertyToUpdate: 'name' | 'lastname'
    setUserPropertyToUpdate: (userPropertyToUpdate: 'name' | 'lastname') => void
}

export const useUserStore = create<UseUserStoreSate>((set, get) => ({
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
    user: null,
    loadingUpdateUser: false,
    updateUser: async (newUserPropertyValue: string) => {
        try {
            set({ loadingUpdateUser: true })
            const user = await updateUserService({
                [get().userPropertyToUpdate]: newUserPropertyValue,
            })
            set({ user })
        } catch (error) {
            throw error
        } finally {
            set({ loadingUpdateUser: false })
        }
    },
    userPropertyToUpdate: 'name',
    setUserPropertyToUpdate: (userPropertyToUpdate: 'name' | 'lastname') =>
        set({ userPropertyToUpdate }),
}))
