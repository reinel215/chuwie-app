import { AxiosError } from "axios"


interface ResponseError extends AxiosError {
    data: {
        error: string;
    }
}

export const handleAxiosError = (error: any) : string => {
    
    const err = error as ResponseError;
    console.error(err);
    return err?.data?.error
}

