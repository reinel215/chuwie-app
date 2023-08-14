import React, { useState, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { User } from '../../../types/share/User'
import { UserList } from '../../Organism/UserList/UserList'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { SUB_USER_PROFILE, USER_LIST } from '../../../routes/UserManager'
import { UserStackParamList } from '../../Navigation/UserNavigator/UserNavigator'
import { useFocusEffect } from '@react-navigation/native'
import { ConfirmationModal } from '../../Organism/ConfirmationModal/ConfirmationModal'
import { useUserList } from '../../../hooks/query/user/useUserList'
import { useRemoveUser } from '../../../hooks/query/user/useRemoveUser'

type UserManagerProps = NativeStackScreenProps<
    UserStackParamList,
    typeof USER_LIST
>
export const UserManager = ({ navigation }: UserManagerProps) => {
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    const {
        isLoading,
        isFetching,
        data: users,
        refetch,
    } = useUserList({
        enabled: false,
    })

    const fetchUserList = useCallback(() => {
        refetch()
    }, [])

    useFocusEffect(fetchUserList)

    //TODO: poner mensaje de error cuando ocurra
    const {
        mutate: removeUser,
        isLoading: isLoadingRemoveUser,
        error,
    } = useRemoveUser({
        onSuccess: fetchUserList,
    })

    const onEdit = (user: User) => {
        navigation.navigate(SUB_USER_PROFILE, { userId: user.uid })
    }

    const onOpenDeleteModal = (user: User) => {
        setShowModal(true)
        setUser(user)
    }

    const onDeleteUser = () => {
        if (!user) return
        setShowModal(false)
        removeUser({ userId: user.uid })
    }

    const onDismissModal = () => setShowModal(false)

    return (
        <SafeAreaWrapper edges={['left', 'right']} style={styles.wrapper}>
            <UserList
                users={users}
                onDelete={onOpenDeleteModal}
                onEdit={onEdit}
                isLoading={isLoading || isFetching || isLoadingRemoveUser}
            />

            <ConfirmationModal
                show={showModal}
                onDismiss={onDismissModal}
                title="¿ Desea eliminar un usuario ?"
                content={`Si desea eliminar a "${user?.name}" seleccione "ACEPTAR"`}
                onAccept={onDeleteUser}
            />
        </SafeAreaWrapper>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 0,
        paddingHorizontal: 0,
    },
    containerStyle: {
        paddingHorizontal: 16,
    },
})
