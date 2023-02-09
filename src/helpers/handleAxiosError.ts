import { AxiosError } from "axios"


interface ResponseError {
    data: {
        error: string;
    }
}

export const handleAxiosError = (error: any) : string => {
    const err = error as ResponseError;
    return err.data.error
}

