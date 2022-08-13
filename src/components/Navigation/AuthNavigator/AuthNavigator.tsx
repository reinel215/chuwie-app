import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../../Screen/Login/Login";


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}