import React from "react";
import { useToast } from "react-native-toast-notifications";
import { useUserStore } from "../../../store/useUserStore";
import { INavigationScreenProp } from "../../../types/share/INavigationScreenProp";
import { UserFormData, UserFormRequest, UserRole } from "../../../types/share/User";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { RegisterForm } from "../../Organism/RegisterForm/RegisterForm";


export const Register = ({ navigation }: INavigationScreenProp) => {

    const toast = useToast();
    const { registerUser, loadingRegisterUser } = useUserStore(state => ({ loadingRegisterUser: state.loadingRegisterUser, registerUser: state.registerUser }));

    const onRegister = async (user: UserFormData) => {
        try {
            await registerUser(user);
            toast.show("Usuario registrado exitosamente!", { type: "success" });
            navigation.navigate("Login");
        } catch (error: any) {
            toast.show(error, { type: "danger" });
        }
    }

    return (
        <SafeAreaWrapper edges={["left", "right"]} style={{paddingHorizontal: 0}}>
            <RegisterForm onRegister={onRegister} isLoading={loadingRegisterUser} />
        </SafeAreaWrapper>
    )
}