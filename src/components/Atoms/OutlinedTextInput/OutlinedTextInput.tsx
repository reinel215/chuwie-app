import React from "react";
import { Controller } from "react-hook-form"
import { TextInput } from "react-native-paper";
import { ITextInput } from "../../../types/share/ITextInput/ITextInput";



export const OutlinedTextInput = ({ name, label, control, rules } : ITextInput) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <TextInput
                    label={label}
                    mode="outlined"
                    value={field.value}
                    onChangeText={field.onChange}
                />
            )}
        />
    )
}