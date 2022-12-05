import React from "react";
import { useUserStore } from "../../../store/useUserStore";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { LoginForm } from "../../Organism/LoginForm/LoginForm";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";
import { app } from "../../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTokenStore } from "../../../store/token/useTokenStore";
import { useToast } from "react-native-toast-notifications";

export const Login = () => {

    const setIsAuth = useUserStore(state => state.setAuth);
    const setAccessToken = useTokenStore(state => state.setAccessToken);
    const toast = useToast();

    const login = async (body: any) => {
        try {
            const auth = getAuth(app);
            const user = await signInWithEmailAndPassword(auth, body.email, body.password)
            setAccessToken(await user.user.getIdToken())
            console.log(await user.user.getIdToken());
            
            setIsAuth(true);
            SecureStore.setItemAsync(IS_AUTH, "true");

        } catch (error) {
            console.log("Este es el error", error);
            toast.show("Ha ocurrido un error al iniciar sesión", { type: "danger" });
        }

    }


    return (
        <SafeAreaWrapper>
            <LoginForm onLogin={login} />
        </SafeAreaWrapper>
    )
}