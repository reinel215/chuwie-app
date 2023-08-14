import { handleAxiosError } from '../../helpers/handleAxiosError'
import {
    UpdateUserFieldForm,
    User,
    UserFormRequest,
} from '../../types/share/User'
import { apiConnector } from '../api-connector'

export const updateUser = async (
    userData: UpdateUserFieldForm
): Promise<User> => {
    try {
        return await apiConnector.put<User>('users/', userData)
    } catch (error) {
        console.error('Error en updateUser')
        const errorString = handleAxiosError(error)
        throw errorString
    }
}
