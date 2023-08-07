import React from 'react'
import { useTokenStore } from '../../../store/token/useTokenStore'
import { AuthNavigator } from '../AuthNavigator/AuthNavigator'
import { MenuDrawerNavigator } from '../MenuDrawerNavigator/MenuDrawerNavigator'
import { StatusBar } from 'react-native'
import { theme } from '../../../config/theme-config'

export const MainNavigator = () => {
    const isAuth = useTokenStore((state) => state.isAuth)

    return (
        <>
            {isAuth ? <MenuDrawerNavigator /> : <AuthNavigator />}
            <StatusBar
                backgroundColor={theme.colors.primary}
                barStyle="light-content"
            />
        </>
    )
}
