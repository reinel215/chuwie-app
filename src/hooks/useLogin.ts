import { useEffect, useState } from "react";
import { useTokenStore } from "../store/token/useTokenStore";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";
import {
  IS_AUTH,
  TOKEN,
} from "../constants/secureStoreKeyNames/secureStoreKeyNames";
import { AuthSessionResult } from "expo-auth-session";
import {
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { getFirebaseError } from "../helpers/getFirebaseError";

//web: 463919467827-u1cjt21ql0o2tm4fm6upjb8j2243k8vj.apps.googleusercontent.com
//android: 463919467827-3h3q1lppb9ee45g8c6kp77csnttu62jc.apps.googleusercontent.com
export enum LoginMethods {
  PASSWORD = "password",
  GOOGLE = "google",
}
interface LoginParams {
  method: LoginMethods;
  email?: string;
  password?: string;
}

interface UseLoginProps {
  onGoogleLogin?: (accessToken: string) => void;
}

export const useLogin = ({ onGoogleLogin }: UseLoginProps) => {
  const setIsAuth = useTokenStore((state) => state.setAuth);
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "463919467827-u1cjt21ql0o2tm4fm6upjb8j2243k8vj.apps.googleusercontent.com",
    androidClientId:
      "463919467827-3h3q1lppb9ee45g8c6kp77csnttu62jc.apps.googleusercontent.com",
  });

  const setUserTokenFromCredential = async (user: UserCredential) => {
    const userToken = await user.user.getIdToken();
    console.log(userToken);

    setAccessToken(userToken);
    SecureStore.setItemAsync(TOKEN, userToken);
    setIsAuth(true);
    SecureStore.setItemAsync(IS_AUTH, "true");
  };

  const manageGoogleSigninResponse = async (
    response: AuthSessionResult | null
  ) => {
    if (response?.type === "success") {
      try {
        setLoading(true);
        const accessToken = response.authentication?.accessToken;

        const credential = GoogleAuthProvider.credential(null, accessToken);

        const user = await signInWithCredential(auth, credential);

        setUserTokenFromCredential(user);

        accessToken && onGoogleLogin?.(accessToken);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    manageGoogleSigninResponse(response);
  }, [response]);

  const loginWithPassword = async (body: any | null) => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        auth,
        body.email,
        body.password
      );
      setUserTokenFromCredential(user);
    } catch (error: any) {
      throw new Error(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    promptAsync();
  };

  //login method with their implmentation
  const loginMap = {
    [LoginMethods.PASSWORD]: loginWithPassword,
    [LoginMethods.GOOGLE]: googleLogin,
  };

  const login = async ({ method, ...rest }: LoginParams): Promise<void> => {
    const loginMethod = loginMap[method];
    if (!loginMethod) {
      throw new Error(`No se encontró un método de login para '${method}'`);
    }
    return await loginMethod(rest);
  };

  return {
    login,
    loading,
  };
};
