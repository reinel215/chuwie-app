import { ISelectData } from "../ISelectData";

export enum UserRole {
    VETERINARIO = "veterinario",
    RESCATISTA = "rescatista",
    SOPORTE = "soporte",
    ADMINISTRATIVO = "administrativo",
    LEGAL = "legal",
    ALIMENTOS = "alimentos"
}


export interface UserFormData {
    name: string;
    lastname: string;
    email: string;
    country: string;
    password: string;
    docNumber: string;
    role: ISelectData
}

export interface ResetPasswordForm {
    email: string
}


export interface UserFormRequest extends UserFormData {
    role : UserRole;
}