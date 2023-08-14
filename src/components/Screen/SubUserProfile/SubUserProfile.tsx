import React, { useCallback } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useUserStore } from '../../../store/useUserStore'
import { theme } from '../../../config/theme-config'
import { UserStackParamList } from '../../Navigation/UserNavigator/UserNavigator'
import { SUB_USER_PROFILE, EDIT_SUB_USER } from '../../../routes/UserManager'
import { UserData } from '../../Organism/UserData/UserData'
import { SafeAreaWrapper } from '../../Atoms/SafeAreaWrapper/SafeAreaWrapper'
import { useSubUserProfileInfo } from '../../../hooks/query/user/useSubUserProfileInfo'

type SubUserProfileProps = NativeStackScreenProps<
    UserStackParamList,
    typeof SUB_USER_PROFILE
>

export const SubUserProfile = ({ route, navigation }: SubUserProfileProps) => {
    const { userId } = route.params
    const { isFetching, data: user } = useSubUserProfileInfo({ userId })

    const { setUserPropertyToUpdate } = useUserStore((state) => ({
        setUserPropertyToUpdate: state.setUserPropertyToUpdate,
    }))

    const goToEdit = (userPropertyToUpdate: 'name' | 'lastname') => {
        setUserPropertyToUpdate(userPropertyToUpdate)
        navigation.navigate(EDIT_SUB_USER, { userId })
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

            <UserData user={user} loading={isFetching} goToEdit={goToEdit} />
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
