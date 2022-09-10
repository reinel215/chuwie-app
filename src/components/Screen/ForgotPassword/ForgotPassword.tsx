import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { ForgotPasswordForm } from "../../Organism/ForgotPasswordForm/ForgotPasswordForm";



export const ForgotPassword = () => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <ForgotPasswordForm />
        </SafeAreaWrapper>
    )
}