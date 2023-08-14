import { useQuery } from '@tanstack/react-query'
import { userProfileKeys } from './userQueryKeys'
import { getCurrentUser } from '../../../services/user/getCurrentUser'

interface UseProfileInfoProps {
    enabled?: boolean
}

export const useProfileInfo = ({ enabled = true }: UseProfileInfoProps) => {
    return useQuery(userProfileKeys.all, () => getCurrentUser(), {
        enabled,
    })
}
