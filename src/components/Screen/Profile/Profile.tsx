import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useUserStore } from '../../../store/useUserStore'
import { theme } from '../../../config/theme-config'
import { EDIT_USER, PROFILE } from '../../../routes/Profile'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { UserData } from '../../Organism/UserData/UserData'
import { useProfileInfo } from '../../../hooks/query/user/useProfileInfo'
import { useFocusEffect, useNavigationState } from '@react-navigation/native'
import { ProfileStackParamList } from '../../Navigation/ProfileNavigator/ProfileNavigator'

type ProfileProps = NativeStackScreenProps<
    ProfileStackParamList,
    typeof PROFILE
>

export const Profile = ({ navigation }: ProfileProps) => {
    const {
        isLoading,
        data: user,
        refetch,
    } = useProfileInfo({ enabled: false })

    useFocusEffect(
        useCallback(() => {
            refetch()
        }, [])
    )

    const { setUserPropertyToUpdate } = useUserStore((state) => ({
        setUserPropertyToUpdate: state.setUserPropertyToUpdate,
    }))

    const goToEdit = (userPropertyToUpdate: 'name' | 'lastname') => {
        setUserPropertyToUpdate(userPropertyToUpdate)
        navigation.navigate(EDIT_USER)
    }

    return (
        <SafeAreaWrapper
            style={{ paddingHorizontal: 0 }}
            edges={['left', 'right']}
        >
            <View style={styles.topBarContainer}>
                <View style={styles.iconContainer}>
                    <FontAwesome
                        name="user-circle"
                        size={70}
                        color={theme.colors.textPrimary}
                    />
                </View>
            </View>

            <UserData user={user} loading={isLoading} goToEdit={goToEdit} />
        </SafeAreaWrapper>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        backgroundColor: theme.colors.primary,
        minHeight: Dimensions.get('window').height * 0.3,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
