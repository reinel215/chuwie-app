import axios from "axios";
import { handleAxiosError } from "../../helpers/handleAxiosError";
import { ITokenRequest } from "../../types/share/ITokenRequest";
import { User } from "../../types/share/User";
import { apiConnector } from "../api-connector";


export const getCurrentUser = async ({ token }: ITokenRequest) : Promise<User> => {
    try {
        
        const user = await apiConnector.get<User>("users/currentUser", {
            headers: {
                'Authorization': token
            }
        });
        return user;
        
    } catch (error) {
        console.error("Error en getCurrentUser user");
        const errorString = handleAxiosError(error);
        throw errorString;
    }
}