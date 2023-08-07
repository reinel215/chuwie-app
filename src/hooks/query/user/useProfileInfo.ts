import { useQuery } from '@tanstack/react-query'
import { userProfileKeys } from './userQueryKeys'
import { getCurrentUser } from '../../../services/user/getCurrentUser'

export const useProfileInfo = () => {
    return useQuery(userProfileKeys.all, () => getCurrentUser())
}
