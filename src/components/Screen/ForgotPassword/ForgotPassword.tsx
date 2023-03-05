import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { ForgotPasswordForm } from "../../Organism/ForgotPasswordForm/ForgotPasswordForm";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { ResetPasswordForm } from "../../../types/share/User";
import { app } from "../../../config/firebase";


export const ForgotPassword = () => {

    const onCreateNewPassword = async ({ email }: ResetPasswordForm) => {
        const auth = getAuth(app);
        await sendPasswordResetEmail(auth, email);

    }

    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <ForgotPasswordForm onCreateNewPassword={onCreateNewPassword} />
        </SafeAreaWrapper>
    )
}