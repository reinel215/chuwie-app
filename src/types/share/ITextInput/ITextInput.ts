
import { Control } from "react-hook-form"


export interface ITextInput {
    name: string;
    label: string;
    control: Control<any, any>;
    rules?: Object
}