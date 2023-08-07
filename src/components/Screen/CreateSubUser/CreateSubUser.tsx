import React from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { RegisterForm } from '../../Organism/RegisterForm/RegisterForm'
import { useToast } from 'react-native-toast-notifications'
import { useUserStore } from '../../../store/useUserStore'
import { UserFormData } from '../../../types/share/User'
import { DrawerParamList } from '../../Navigation/MenuDrawerNavigator/MenuDrawerNavigator'
import { CREATE_SUB_USER } from '../../../routes/UserManager'

type SubUserProfileProps = DrawerScreenProps<
    DrawerParamList,
    typeof CREATE_SUB_USER
>

export const CreateSubUser = ({ navigation }: SubUserProfileProps) => {
    const toast = useToast()
    const { registerUser, loadingRegisterUser } = useUserStore((state) => ({
        loadingRegisterUser: state.loadingRegisterUser,
        registerUser: state.registerUser,
    }))

    const onRegister = async (user: UserFormData) => {
        try {
            await registerUser(user)
            toast.show('Usuario registrado exitosamente!', { type: 'success' })
            navigation.goBack()
        } catch (error: any) {
            toast.show(error, { type: 'danger' })
        }
    }

    return (
        <SafeAreaWrapper
            edges={['left', 'right']}
            style={{ paddingHorizontal: 0 }}
        >
            <RegisterForm
                onRegister={onRegister}
                isSubUser
                isLoading={loadingRegisterUser}
            />
        </SafeAreaWrapper>
    )
}
