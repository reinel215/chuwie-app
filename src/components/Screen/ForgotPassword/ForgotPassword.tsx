import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { ForgotPasswordForm } from "../../Organism/ForgotPasswordForm/ForgotPasswordForm";
import { sendPasswordResetEmail } from "firebase/auth";
import { ResetPasswordForm } from "../../../types/share/User";
import { auth } from "../../../config/firebase";
import { getFirebaseError } from "../../../helpers/getFirebaseError";
import { useToast } from "react-native-toast-notifications";

export const ForgotPassword = () => {
  const toast = useToast();

  const onCreateNewPassword = async ({ email }: ResetPasswordForm) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      toast.show(getFirebaseError(error), { type: "danger" });
    }
  };

  return (
    <SafeAreaWrapper edges={["left", "right"]}>
      <ForgotPasswordForm onCreateNewPassword={onCreateNewPassword} />
    </SafeAreaWrapper>
  );
};
