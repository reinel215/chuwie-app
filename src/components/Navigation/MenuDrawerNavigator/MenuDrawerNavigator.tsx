import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, } from "@react-navigation/drawer";
import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { Home } from "../../Screen/Home/Home";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH, TOKEN } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";
import { CreateSubUser } from "../../Screen/CreateSubUser/CreateSubUser";
import { Profile } from "../../Screen/Profile/Profile";
import { useTokenStore } from "../../../store/token/useTokenStore";
import { EditUser } from "../../Screen/EditUser/EditUser";
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileNavigator } from "../ProfileNavigator/ProfileNavigator";

const Drawer = createDrawerNavigator();



export const MenuDrawerNavigator = () => {
    const navigation = useNavigation<NavigationProp<any>>();

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
                name="ProfileNavigator"
                component={ProfileNavigator}
                options={{
                    headerShown: false
                }}
            />

        </Drawer.Navigator>
    )
}



const CustomDrawerContent = ({ navigation }: DrawerContentComponentProps) => {

    const setIsAuth = useTokenStore(state => state.setAuth);
    const setAccessToken = useTokenStore(state => state.setAccessToken);

    const logout = () => {
        SecureStore.deleteItemAsync(IS_AUTH)
        SecureStore.deleteItemAsync(TOKEN)
        setIsAuth(false)
        setAccessToken("")
    }

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Crear Usuario" onPress={() => navigation.navigate("CreateSubUser")} />
            <DrawerItem label="Perfil" onPress={() => navigation.navigate("ProfileNavigator", { screen: "Profile" })} />
            <DrawerItem label="Cerrar sesión" onPress={logout} />
        </DrawerContentScrollView>
    )
}