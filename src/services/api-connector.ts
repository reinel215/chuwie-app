import { ApiService } from "./ApiService";
import env from '../../env.json';
import { AxiosError } from "axios";
import { useTokenStore } from "../store/token/useTokenStore";
import * as SecureStore from "expo-secure-store";
import { IS_AUTH, TOKEN } from "../constants/secureStoreKeyNames/secureStoreKeyNames";

const baseDomain : any = env.baseUrl;

const connectionConfig = {
  baseUrl: baseDomain,
  headers: {
    "Content-Type": "application/json",
  },
};

const errorInterceptorResponseUnathorized = (error : AxiosError) => {
  if (error.response?.status === 403){
    SecureStore.deleteItemAsync(TOKEN)
    SecureStore.deleteItemAsync(IS_AUTH)
    useTokenStore.getState().setAuth(false)
    useTokenStore.getState().setAccessToken("")
  }
}

export const apiConnector = new ApiService(connectionConfig, errorInterceptorResponseUnathorized );