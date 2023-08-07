import { useQuery } from '@tanstack/react-query'
import { subUserProfilekeys } from './userQueryKeys'
import { getUserInfoById } from '../../../services/user/getUserInfoById'

type UseSubUserProfileInfoProps = {
    userId: string
}
export const useSubUserProfileInfo = ({
    userId,
}: UseSubUserProfileInfoProps) => {
    return useQuery(
        subUserProfilekeys.data(userId),
        () => getUserInfoById({ userId }),
        {
            enabled: !!userId,
        }
    )
}
