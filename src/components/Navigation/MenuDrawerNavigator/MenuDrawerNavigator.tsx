import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import React from 'react'
import { NavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import { Home } from '../../Screen/Home/Home'
import * as SecureStore from 'expo-secure-store'
import {
    IS_AUTH,
    TOKEN,
} from '../../../constants/secureStoreKeyNames/secureStoreKeyNames'
import { CreateSubUser } from '../../Screen/CreateSubUser/CreateSubUser'
import { useTokenStore } from '../../../store/token/useTokenStore'

import {
    UserStackParamList,
    UserNavigator,
} from '../UserNavigator/UserNavigator'
import {
    HOME,
    USER_MANAGER_NAVIGATOR,
    PROFILE_NAVIGATOR,
} from '../../../routes/GeneralRoutes'
import { CREATE_SUB_USER } from '../../../routes/UserManager'
import { theme } from '../../../config/theme-config'
import { ProfileNavigator } from '../ProfileNavigator/ProfileNavigator'
import { DrawerHeaderOptions } from '../utils/headerOptions'

export type DrawerParamList = {
    [HOME]: undefined
    [CREATE_SUB_USER]: undefined
    [USER_MANAGER_NAVIGATOR]: NavigatorScreenParams<UserStackParamList>
    [PROFILE_NAVIGATOR]: undefined
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const MenuDrawerNavigator = () => {
    const onPressBack = (navigation: NavigationProp<DrawerParamList>) => {
        navigation.goBack()
    }

    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTitleStyle: {
                    color: theme.colors.textPrimary,
                },
                headerTintColor: theme.colors.textPrimary,
            }}
        >
            <Drawer.Screen name={HOME} component={Home} />

            <Drawer.Screen
                name={CREATE_SUB_USER}
                component={CreateSubUser}
                options={(props) =>
                    DrawerHeaderOptions({
                        ...props,
                        title: 'Crear usuario',
                        onPressBack: () => onPressBack(props.navigation),
                    })
                }
            />

            <Drawer.Screen
                name={PROFILE_NAVIGATOR}
                component={ProfileNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name={USER_MANAGER_NAVIGATOR}
                component={UserNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}
//error en DrawerContentComponentProps type no toma el tipo especificado arriba en DrawerParamList
const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    const setIsAuth = useTokenStore((state) => state.setAuth)
    const setAccessToken = useTokenStore((state) => state.setAccessToken)
    const logout = () => {
        SecureStore.deleteItemAsync(IS_AUTH)
        SecureStore.deleteItemAsync(TOKEN)
        setIsAuth(false)
        setAccessToken('')
    }

    const goTo = (
        routeName:
            | typeof PROFILE_NAVIGATOR
            | typeof USER_MANAGER_NAVIGATOR
            | typeof CREATE_SUB_USER
            | typeof HOME
    ) => {
        navigation.navigate(routeName)
    }

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Inicio" onPress={() => goTo(HOME)} />

            <DrawerItem
                label="Gestionar usuarios"
                onPress={() => goTo(USER_MANAGER_NAVIGATOR)}
            />
            <DrawerItem
                label="Crear usuario"
                onPress={() => goTo(CREATE_SUB_USER)}
            />
            <DrawerItem
                label="Perfil"
                onPress={() => goTo(PROFILE_NAVIGATOR)}
            />
            <DrawerItem label="Cerrar sesión" onPress={logout} />
        </DrawerContentScrollView>
    )
}
