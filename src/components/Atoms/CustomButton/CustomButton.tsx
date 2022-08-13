import React from "react";
import { Button, Text } from "react-native-paper";
import { theme } from "../../../config/theme-config";


interface ICustomButtonProps {
    text: string;
}

export const CustomButton = ({ text }: ICustomButtonProps) => {
    return (
        <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={{ flex: 1, maxHeight: 50, justifyContent: "center", alignItems: "center", width: "100%" }}
        >
            <Text theme={{ colors: { text: theme.colors.textPrimary } }}>
                {text}
            </Text>
        </Button>
    )
}