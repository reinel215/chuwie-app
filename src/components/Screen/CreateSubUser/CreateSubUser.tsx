import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { RegisterForm } from "../../Organism/RegisterForm/RegisterForm";


export const CreateSubUser = () => {
    return (
        <SafeAreaWrapper edges={["left", "right"]}  >
            <RegisterForm onRegister={() => {}} />
        </SafeAreaWrapper>
    )
}