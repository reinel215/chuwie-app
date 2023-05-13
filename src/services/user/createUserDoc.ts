import { handleAxiosError } from "../../helpers/handleAxiosError";
import { UserDoc } from "../../types/share/User";
import { apiConnector } from "../api-connector";

export const createUserDoc = async (userData: UserDoc) => {
  try {
    await apiConnector.post("users/register-user-doc", userData);
  } catch (error) {
    const errorString = handleAxiosError(error);
    throw errorString;
  }
};
