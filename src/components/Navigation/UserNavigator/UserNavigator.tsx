import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {
    USER_LIST,
    EDIT_SUB_USER,
    SUB_USER_PROFILE,
} from '../../../routes/UserManager'
import { UserManager } from '../../Screen/UserList/UserList'
import { NavigationProp } from '@react-navigation/native'
import { SubUserProfile } from '../../Screen/SubUserProfile/SubUserProfile'
import { stackheaderOptions } from '../utils/headerOptions'
import { EditSubUser } from '../../Screen/EditSubUser/EditSubUser'

export type UserStackParamList = {
    [SUB_USER_PROFILE]: { userId: string }
    [EDIT_SUB_USER]: { userId: string }
    [USER_LIST]: undefined
}

const Stack = createNativeStackNavigator<UserStackParamList>()

export const UserNavigator = () => {
    const onPressBack = (navigation: NavigationProp<UserStackParamList>) => {
        navigation.goBack()
    }

    return (
        <Stack.Navigator initialRouteName={USER_LIST}>
            <Stack.Screen
                name={SUB_USER_PROFILE}
                component={SubUserProfile}
                options={(props) =>
                    stackheaderOptions({
                        ...props,
                        title: '',
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />

            <Stack.Screen
                name={EDIT_SUB_USER}
                component={EditSubUser}
                options={(props) =>
                    stackheaderOptions({
                        ...props,
                        title: 'Editar usuario',
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />

            <Stack.Screen
                name={USER_LIST}
                component={UserManager}
                options={(props) =>
                    stackheaderOptions({
                        ...props,
                        title: 'Gestión de usuarios',
                        headerShadowVisible: true,
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />
        </Stack.Navigator>
    )
}
