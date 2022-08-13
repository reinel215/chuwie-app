
import { Control, FieldValues } from "react-hook-form"


export interface ITextInput {
    name: string;
    label: string;
    control: Control<FieldValues, any>;
    rules?: any
}