import { AuthErrorsMap } from "../constants/firebase/AuthErrorsMap";

export const getFirebaseError = (error: any): string => {
  const errorMessage = AuthErrorsMap[error.code as keyof typeof AuthErrorsMap];
  return errorMessage || "Error no reconocido";
};
