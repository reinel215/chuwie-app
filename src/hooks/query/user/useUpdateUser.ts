import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userProfileKeys } from './userQueryKeys'
import { updateUser } from '../../../services/user/updateUser'
import { User } from '../../../types/share/User'

interface UserUpdateUserProps {
    onError: () => void
    onSuccess: (user: User) => void
}

export const useUpdateUser = ({ onError, onSuccess }: UserUpdateUserProps) => {
    const client = useQueryClient()
    return useMutation(updateUser, {
        onSuccess: (data) => {
            client.setQueryData(userProfileKeys.all, () => data),
                onSuccess(data)
        },
        onError,
    })
}
