import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../../Screen/Login/Login";
import { Register } from "../../Screen/Register/Register";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ForgotPassword } from "../../Screen/ForgotPassword/ForgotPassword";
import { SetEmailVerificationCode } from "../../Screen/SetEmailVerificationCode/SetEmailVerificationCode";
import { CreateNewPassword } from "../../Screen/CreateNewPassword/CreateNewPassword";
import { PasswordCreatedSuccess } from "../../Screen/PasswordCreatedSuccess/PasswordCreatedSuccess";

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
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    )
                }}
            />


            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    title: "Recuperar contraseña",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    )
                }}
            />



            <Stack.Screen
                name="SetEmailVerificationCode"
                component={SetEmailVerificationCode}
                options={{
                    title: "Recuperar contraseña",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    )
                }}
            />

            <Stack.Screen
                name="CreateNewPassword"
                component={CreateNewPassword}
                options={{
                    title: "Recuperar contraseña",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    )
                }}
            />


            <Stack.Screen
                name="PasswordCreatedSuccess"
                component={PasswordCreatedSuccess}
                options={{
                    title: "",
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                            <AntDesign name="close" size={24} />
                        </TouchableOpacity>
                    ),
                    headerBackVisible: false
                }}
            />
        </Stack.Navigator>
    )
}