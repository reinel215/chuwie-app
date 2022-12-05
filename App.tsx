import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./src/components/Main";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/services/react-query/query-client";
import { theme } from "./src/config/theme-config";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/components/Navigation/MainNavigator/MainNavigator";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import { IS_AUTH } from "./src/constants/secureStoreKeyNames/secureStoreKeyNames";
import { useUserStore } from "./src/store/useUserStore";
import { ToastProvider } from "react-native-toast-notifications";


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {


  const setIsAuth = useUserStore(state => state.setAuth);

  useEffect(() => {
    async function prepare() {
      const isAuth = await SecureStore.getItemAsync(IS_AUTH);
      if (isAuth) setIsAuth(true)
      SplashScreen.hideAsync();
    }


    prepare();
  }, []);

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
  );
}



