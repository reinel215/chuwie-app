import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";
import { Profile } from "../../Screen/Profile/Profile";
import { EditUser } from "../../Screen/EditUser/EditUser";

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={({navigation}) => ({
                    title: "",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    ),
                    headerShadowVisible: false
                })}
            />

            <Stack.Screen
                name="EditUser"
                component={EditUser}
                options={({navigation}) => ({
                    title: "Editar usuario",
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <AntDesign name="left" size={20} />
                        </TouchableOpacity>
                    )
                })}
            />
        </Stack.Navigator>
    )
}