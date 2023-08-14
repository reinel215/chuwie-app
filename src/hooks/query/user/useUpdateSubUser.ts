import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSubUser } from '../../../services/user/updateSubUser'
import { subUserProfilekeys, userListKeys } from './userQueryKeys'
import { User } from '../../../types/share/User'

interface useUpdateSubUserProps {
    userId?: string
    onError: () => void
    onSuccess: (user: User) => void
}

export const useUpdateSubUser = ({
    userId,
    onError,
    onSuccess,
}: useUpdateSubUserProps) => {
    const client = useQueryClient()
    return useMutation(updateSubUser, {
        onSuccess: (data) => {
            client.invalidateQueries([userListKeys.all])
            if (userId) {
                client.setQueryData(subUserProfilekeys.data(userId), () => data)
            }
            onSuccess(data)
        },
        onError,
    })
}
