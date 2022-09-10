import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { CreateNewPasswordForm } from "../../Organism/CreateNewPasswordForm/CreateNewPasswordForm";



export const CreateNewPassword = () => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <CreateNewPasswordForm />
        </SafeAreaWrapper>
    )
}