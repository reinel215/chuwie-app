import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { useUserStore } from '../../../store/useUserStore'
import { UpdateUserFieldForm } from '../../../types/share/User'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { useToast } from 'react-native-toast-notifications'
import { EditUserFieldForm } from '../../Organism/EditUserFieldForm/EditUserFieldForm'
import { useUpdateSubUser } from '../../../hooks/query/user/useUpdateSubUser'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { UserStackParamList } from '../../Navigation/UserNavigator/UserNavigator'
import { EDIT_SUB_USER } from '../../../routes/UserManager'

const mapPropertyToLabel = {
    name: 'Nombre',
    lastname: 'Apellido',
}

type EditSubUserProps = NativeStackScreenProps<
    UserStackParamList,
    typeof EDIT_SUB_USER
>

export const EditSubUser = ({ route, navigation }: EditSubUserProps) => {
    const { userId } = route.params
    const toast = useToast()
    const { userPropertyToUpdate } = useUserStore((state) => ({
        userPropertyToUpdate: state.userPropertyToUpdate,
    }))

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
    const { mutate: updateSubUser, isLoading } = useUpdateSubUser({
        userId,
        onError: onUpdateUserError,
        onSuccess: onUpdateUserSuccess,
    })

    const onEdit = async (formData: UpdateUserFieldForm) => {
        const newPropertyValue = formData[userPropertyToUpdate]
        if (!newPropertyValue) return
        await updateSubUser({
            userId,
            body: { [userPropertyToUpdate]: newPropertyValue },
        })
        navigation.goBack()
    }

    return (
        <SafeAreaWrapper edges={['left', 'right']}>
            <EditUserFieldForm onEdit={onEdit} loading={isLoading} />
        </SafeAreaWrapper>
    )
}
