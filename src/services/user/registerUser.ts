import { handleAxiosError } from "../../helpers/handleAxiosError";
import { UserFormRequest } from "../../types/share/User";
import { apiConnector } from "../api-connector";

export const registerUser = async (userData: UserFormRequest) => {
  try {
    await apiConnector.post("users/register", userData);
  } catch (error) {
    const errorString = handleAxiosError(error);
    throw errorString;
  }
};
