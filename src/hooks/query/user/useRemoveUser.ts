import { useMutation } from '@tanstack/react-query'
import { deleteUser } from '../../../services/user/deleteUser'

interface useRemoveUserProps {
    onSuccess?: () => void
}
export const useRemoveUser = ({ onSuccess }: useRemoveUserProps) => {
    return useMutation(deleteUser, {
        onSuccess,
    })
}
