import { ISelectData } from "./ISelectData";

export enum UserRole {
  VETERINARIO = "veterinario",
  RESCATISTA = "rescatista",
  SOPORTE = "soporte",
  ADMINISTRATIVO = "administrativo",
  LEGAL = "legal",
  ALIMENTOS = "alimentos",
}

export interface UserFormData {
  name: string;
  lastname: string;
  email: string;
  country: string;
  password: string;
  docNumber: string;
  role: ISelectData;
}

export interface ResetPasswordForm {
  email: string;
}

export interface UserFormRequest extends Omit<UserFormData, "role"> {
  role: UserRole;
}

export type UserDoc = Partial<UserFormData>;

export type UpdateUserFieldForm = Partial<UserFormData>;

export interface User {
  country: string;
  docNumber: string;
  email: string;
  lastname: string;
  name: string;
  role: UserRole;
  uid: string;
}
