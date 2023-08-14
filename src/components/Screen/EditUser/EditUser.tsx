import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useUserStore } from '../../../store/useUserStore'
import { UpdateUserFieldForm } from '../../../types/share/User'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { useToast } from 'react-native-toast-notifications'
import { EditUserFieldForm } from '../../Organism/EditUserFieldForm/EditUserFieldForm'
import { useUpdateUser } from '../../../hooks/query/user/useUpdateUser'

const mapPropertyToLabel = {
    name: 'Nombre',
    lastname: 'Apellido',
}

export const EditUser = () => {
    const toast = useToast()

    const onUpdateUserError = () => {
        toast.show(
            `!Oops¡ Error actualizando el ${mapPropertyToLabel[userPropertyToUpdate]}`,
            { type: 'danger' }
        )
    }

    const onUpdateUserSuccess = () => {
        toast.show(
            `${mapPropertyToLabel[userPropertyToUpdate]} actualizado correctamente`,
            { type: 'success' }
        )
    }

    const { mutate: updateUser, isLoading } = useUpdateUser({
        onError: onUpdateUserError,
        onSuccess: onUpdateUserSuccess,
    })
    const { userPropertyToUpdate } = useUserStore((state) => ({
        userPropertyToUpdate: state.userPropertyToUpdate,
    }))
    const navigation = useNavigation<NavigationProp<any>>()

    const onEdit = async (formData: UpdateUserFieldForm) => {
        const newPropertyValue = formData[userPropertyToUpdate]
        if (!newPropertyValue) return
        await updateUser({ [userPropertyToUpdate]: newPropertyValue })
        navigation.goBack()
    }

    return (
        <SafeAreaWrapper edges={['left', 'right']}>
            <EditUserFieldForm onEdit={onEdit} loading={isLoading} />
        </SafeAreaWrapper>
    )
}
