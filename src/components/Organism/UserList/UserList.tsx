import React from 'react'
import { View } from 'react-native'
import { StyleSheet, FlatList } from 'react-native'
import { User } from '../../../types/share/User'
import { UserItem } from '../../Molecules/UserItem/UserItem'
import { UserListSkeleton } from '../UserListSkeleton/UserListSkeleton'

interface UserListProps {
    users: Array<User> | undefined
    onEdit: (user: User) => void
    onDelete: (user: User) => void
    isLoading: boolean
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 16,
    },
})

export const UserList = ({
    users,
    onDelete,
    onEdit,
    isLoading,
}: UserListProps) => {
    if (isLoading) {
        return (
            <View style={styles.containerStyle}>
                {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((position) => (
                    <UserListSkeleton key={position} />
                ))}
            </View>
        )
    }

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => (
                <UserItem
                    user={item}
                    onDelete={() => onDelete(item)}
                    onEdit={() => onEdit(item)}
                />
            )}
            contentContainerStyle={styles.containerStyle}
        />
    )
}
