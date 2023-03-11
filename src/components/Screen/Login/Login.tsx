import React, { useState } from "react";
import { useUserStore } from "../../../store/useUserStore";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { LoginForm } from "../../Organism/LoginForm/LoginForm";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH, TOKEN } from "../../../constants/secureStoreKeyNames/secureStoreKeyNames";
import { app } from "../../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useTokenStore } from "../../../store/token/useTokenStore";
import { useToast } from "react-native-toast-notifications";
import { ScrollView } from "react-native";

export const Login = () => {

    const setIsAuth = useTokenStore(state => state.setAuth);
    const setAccessToken = useTokenStore(state => state.setAccessToken);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const login = async (body: any) => {
        try {
            setLoading(true)
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
        }finally{
            setLoading(false)
        }

    }


    return (
        <SafeAreaWrapper style={{ paddingHorizontal: 0 }} >
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }} >
                <LoginForm onLogin={login} loading={loading} />
            </ScrollView>
        </SafeAreaWrapper>
    )
}