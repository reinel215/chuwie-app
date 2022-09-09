import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { RegisterForm } from "../../Organism/RegisterForm/RegisterForm";


export const Register = () => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <RegisterForm />
        </SafeAreaWrapper>
    )
}