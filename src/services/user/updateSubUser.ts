import { handleAxiosError } from '../../helpers/handleAxiosError'
import { UpdateUserFieldForm, User } from '../../types/share/User'
import { apiConnector } from '../api-connector'

interface UpdateSubUserProps {
    body: UpdateUserFieldForm
    userId: string
}

export const updateSubUser = async (
    request: UpdateSubUserProps
): Promise<User> => {
    try {
        return await apiConnector.put<User>(
            `users/${request.userId}`,
            request.body
        )
    } catch (error) {
        const errorString = handleAxiosError(error)
        throw errorString
    }
}
