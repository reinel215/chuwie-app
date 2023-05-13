import { AxiosError } from "axios";

interface ErrorResponse {
  error?: string;
}
interface ResponseError extends AxiosError<ErrorResponse, any> {
  data: {
    error: string;
  };
}

export const handleAxiosError = (error: any): string => {
  const err = error as ResponseError;
  return err?.data?.error || err.response?.data?.error || "Error desconocido";
};
