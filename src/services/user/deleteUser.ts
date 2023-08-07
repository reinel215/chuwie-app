import { handleAxiosError } from '../../helpers/handleAxiosError'
import { apiConnector } from '../api-connector'

type DeleteUserProps = {
    userId: string
}

export const deleteUser = async ({ userId }: DeleteUserProps) => {
    try {
        console.log('ME ESTAN EJECUTANDO')
        console.log(apiConnector.delete)

        await apiConnector.delete(`users/${userId}`)
        console.log('DESPUES DE EJECUTARME')
    } catch (error) {
        console.log(error)

        const errorString = handleAxiosError(error)
        throw errorString
    }
}
