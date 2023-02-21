import axios from "axios";
import { handleAxiosError } from "../../helpers/handleAxiosError";
import { ITokenRequest } from "../../types/share/ITokenRequest";
import { apiConnector } from "../api-connector";


export const getCurrentUser = async ({ token }: ITokenRequest) => {
    try {
        console.log("Antes de la peticion");
        
        const user = await apiConnector.get("users/currentUser", {
            headers: {
                'Authorization': token
            }
        });

        console.log("Este es el user ", user);
        
    } catch (error) {
        console.error("Error en getCurrentUser user");
        const errorString = handleAxiosError(error);
        throw errorString;
    }
}