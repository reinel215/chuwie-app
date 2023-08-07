import { useQuery } from '@tanstack/react-query'
import { userListKeys } from './userQueryKeys'
import { getUsers } from '../../../services/user/getUsers'

type useUserListProps = {
    enabled?: boolean
}
export const useUserList = ({
    enabled = true,
}: useUserListProps) => {
    return useQuery(
        userListKeys.lists(),
        () => getUsers(),
        {
            enabled,
        }
    )
}
