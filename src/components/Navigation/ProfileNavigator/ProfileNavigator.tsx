import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Profile } from '../../Screen/Profile/Profile'
import { EditUser } from '../../Screen/EditUser/EditUser'
import { PROFILE, EDIT_USER } from '../../../routes/Profile'
import { stackheaderOptions } from '../utils/headerOptions'
import { NavigationProp } from '@react-navigation/native'

export type ProfileStackParamList = {
    [PROFILE]: undefined
    [EDIT_USER]: undefined
}

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export const ProfileNavigator = () => {
    const onPressBack = (navigation: NavigationProp<ProfileStackParamList>) => {
        navigation.goBack()
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={PROFILE}
                component={Profile}
                options={(props) =>
                    stackheaderOptions({
                        ...props,
                        title: '',
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />

            <Stack.Screen
                name={EDIT_USER}
                component={EditUser}
                options={(props) =>
                    stackheaderOptions({
                        ...props,
                        title: 'Editar usuario',
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />
        </Stack.Navigator>
    )
}
