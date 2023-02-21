import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { LoginForm } from "../../Organism/LoginForm/LoginForm";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH, TOKEN } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";
import { app } from "../../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTokenStore } from "../../../store/token/useTokenStore";
import { useToast } from "react-native-toast-notifications";

export const Login = () => {

    const setIsAuth = useTokenStore(state => state.setAuth);
    const setAccessToken = useTokenStore(state => state.setAccessToken);
    const toast = useToast();

    const login = async (body: any) => {
        try {
            const auth = getAuth(app);
            const user = await signInWithEmailAndPassword(auth, body.email, body.password)
            const userToken = await user.user.getIdToken()
            console.log(userToken);
            
            setAccessToken(userToken)
            SecureStore.setItemAsync(TOKEN, userToken);
            setIsAuth(true);
            SecureStore.setItemAsync(IS_AUTH, "true");

        } catch (error: any) {
            toast.show(error, { type: "danger" });
        }

    }


    return (
        <SafeAreaWrapper>
            <LoginForm onLogin={login} />
        </SafeAreaWrapper>
    )
}