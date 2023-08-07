import { handleAxiosError } from '../../helpers/handleAxiosError'
import { User } from '../../types/share/User'
import { apiConnector } from '../api-connector'

export const getUsers = async (): Promise<Array<User>> => {
    try {
        return await apiConnector.get<Array<User>>('users')
    } catch (error) {
        const errorString = handleAxiosError(error)
        throw errorString
    }
}
