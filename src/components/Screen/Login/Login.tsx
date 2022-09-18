import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { LoginForm } from "../../Organism/LoginForm/LoginForm";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";


export const Login = () => {

    const setIsAuth = useUserStore(state => state.setAuth);

    const login = () => {
        console.log("HACIENDO LOGIN");

        //pasar esto lueego dentro del servicio
        SecureStore.setItemAsync(IS_AUTH, "true");
        setIsAuth(true);
    }


    return (
        <SafeAreaWrapper>
            <LoginForm onLogin={login} />
        </SafeAreaWrapper>
    )
}