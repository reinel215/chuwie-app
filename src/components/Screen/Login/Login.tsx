import React from "react";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { LoginForm } from "../../Organism/LoginForm/LoginForm";
import { useToast } from "react-native-toast-notifications";
import { ScrollView } from "react-native";
import { LoginMethods, useLogin } from "../../../hooks/useLogin";
import axios from "axios";

export const Login = () => {
  const onGoogleLogin = async (accessToken: string) => {
    const response = await axios.get(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const { family_name, given_name } = response.data;
    
  };

  const { loading, login } = useLogin({
    onGoogleLogin,
  });
  const toast = useToast();

  const onLogin = async (method: LoginMethods, body?: any) => {
    try {
      await login({ method, ...body });
    } catch (error: any) {
      toast.show(error.message, { type: "danger" });
    }
  };

  return (
    <SafeAreaWrapper style={{ paddingHorizontal: 0 }}>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <LoginForm
          onLogin={(body: any) => onLogin(LoginMethods.PASSWORD, body)}
          loading={loading}
          onGoogle={() => onLogin(LoginMethods.GOOGLE)}
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
};
