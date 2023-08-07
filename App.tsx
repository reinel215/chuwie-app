import { Provider as PaperProvider } from 'react-native-paper'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './src/services/react-query/query-client'
import { theme } from './src/config/theme-config'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigator } from './src/components/Navigation/MainNavigator/MainNavigator'
import * as SplashScreen from 'expo-splash-screen'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'
import {
    IS_AUTH,
    TOKEN,
} from './src/constants/secureStoreKeyNames/secureStoreKeyNames'
import { ToastProvider } from 'react-native-toast-notifications'
import { useTokenStore } from './src/store/token/useTokenStore'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
    const setIsAuth = useTokenStore((state) => state.setAuth)
    const setAccessToken = useTokenStore((state) => state.setAccessToken)

    useEffect(() => {
        async function prepare() {
            const isAuth = await SecureStore.getItemAsync(IS_AUTH)
            if (isAuth) setIsAuth(true)

            const token = await SecureStore.getItemAsync(TOKEN)
            token && (await setAccessToken(token))

            console.log('ESTE ES EL TOKEN ', token)

            SplashScreen.hideAsync()
        }

        prepare()
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <PaperProvider theme={theme}>
                <ToastProvider>
                    <NavigationContainer>
                        <MainNavigator />
                    </NavigationContainer>
                </ToastProvider>
            </PaperProvider>
        </QueryClientProvider>
    )
}
