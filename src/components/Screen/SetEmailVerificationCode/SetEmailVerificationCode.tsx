import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { SetEmailVerificationCodeForm } from "../../Organism/SetEmailVerificationCodeForm/SetEmailVerificationCodeForm";


export const SetEmailVerificationCode = () => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}>
            <SetEmailVerificationCodeForm />
        </SafeAreaWrapper>
    )
}