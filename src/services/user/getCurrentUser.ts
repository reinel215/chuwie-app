import { handleAxiosError } from "../../helpers/handleAxiosError";
import { User } from "../../types/share/User";
import { apiConnector } from "../api-connector";

export const getCurrentUser = async (): Promise<User> => {
  try {
    const user = await apiConnector.get<User>("users/currentUser");
    return user;
  } catch (error) {
    const errorString = handleAxiosError(error);
    throw errorString;
  }
};
