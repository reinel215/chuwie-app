import { handleAxiosError } from '../../helpers/handleAxiosError'
import { User } from '../../types/share/User'
import { apiConnector } from '../api-connector'

type GetUserInfoByIdProps = {
    userId: string
}

export const getUserInfoById = async ({
    userId,
}: GetUserInfoByIdProps): Promise<User> => {
    try {
        const user = await apiConnector.get<User>(`users/${userId}`)
        return user
    } catch (error) {
        const errorString = handleAxiosError(error)
        throw errorString
    }
}
