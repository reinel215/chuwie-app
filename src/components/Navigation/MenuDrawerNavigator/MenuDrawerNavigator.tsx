import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { Home } from "../../Screen/Home/Home";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";

const Drawer = createDrawerNavigator();



export const MenuDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
            />
        </Drawer.Navigator>
    )
}



const CustomDrawerContent = () => {

    const setIsAuth = useUserStore(state => state.setAuth);

    const logout = () => {
        SecureStore.deleteItemAsync(IS_AUTH);
        setIsAuth(false)
    }

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Cerrar sesión" onPress={logout} />
        </DrawerContentScrollView>
    )
}