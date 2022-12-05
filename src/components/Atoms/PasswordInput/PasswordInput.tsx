import React, { useState } from "react";
import { Controller, Control, FieldValues } from "react-hook-form"
import { TextInput } from "react-native-paper";
import { ITextInput } from "../../../types/share/ITextInput/ITextInput";




export const PasswordInput = ({ name, label, control, rules }: ITextInput) => {
    const [hiddePassword, setHiddePassword] = useState<boolean>(true);


    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <TextInput
                    secureTextEntry={hiddePassword}
                    label={label}
                    mode="outlined"
                    right={<TextInput.Icon name={hiddePassword ? "eye-outline" : "eye-off-outline"} onPress={() => setHiddePassword(!hiddePassword)} />}
                    value={field.value}
                    onChangeText={field.onChange}
                />
            )}
        />
    )
}