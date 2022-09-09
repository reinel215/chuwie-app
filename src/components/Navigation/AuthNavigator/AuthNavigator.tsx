import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native-paper";
import { Login } from "../../Screen/Login/Login";
import { Register } from "../../Screen/Register/Register";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { TouchableOpacity } from "react-native";
import { INavigationScreenProp } from "../../../types/share/ITextInput/INavigationScreenProp";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {

    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: "Registro",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <FontAwesome name="chevron-left" size={16} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}