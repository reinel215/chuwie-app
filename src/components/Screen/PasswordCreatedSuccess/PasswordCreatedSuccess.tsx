import React from "react";
import { INavigationScreenProp } from "../../../types/share/ITextInput/INavigationScreenProp";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { UserFeedback } from "../../Organism/UserFeedback/UserFeedback";


export const PasswordCreatedSuccess = ({ navigation }: INavigationScreenProp) => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <UserFeedback
                onPress={() => navigation.navigate("Login")}
                mainText="La contraseña ha sido cambiada"
                secondaryText="Recibiras un email de confirmacion"
                buttonLabel="Ir a iniciar sesión"
            />
        </SafeAreaWrapper>
    )
}