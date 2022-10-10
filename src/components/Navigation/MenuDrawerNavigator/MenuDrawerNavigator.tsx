import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem,  } from "@react-navigation/drawer";
import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { Home } from "../../Screen/Home/Home";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";
import { CreateSubUser } from "../../Screen/CreateSubUser/CreateSubUser";
import { Profile } from "../../Screen/Profile/Profile";

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

            <Drawer.Screen
                name="CreateSubUser"
                component={CreateSubUser}
            />

            <Drawer.Screen 
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
}



const CustomDrawerContent = ({ navigation } : DrawerContentComponentProps) => {

    const setIsAuth = useUserStore(state => state.setAuth);

    const logout = () => {
        SecureStore.deleteItemAsync(IS_AUTH);
        setIsAuth(false)
    }

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Crear Usuario" onPress={() => navigation.navigate("CreateSubUser")} />
            <DrawerItem label="Perfil" onPress={() => navigation.navigate("Profile")} />
            <DrawerItem label="Cerrar sesión" onPress={logout} />
        </DrawerContentScrollView>
    )
}