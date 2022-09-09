import React from "react";
import { Button, Text } from "react-native-paper";
import { theme } from "../../../config/theme-config";


interface ICustomButtonProps {
    text: string;
    onPress: () => void
}

export const CustomButton = ({ text, onPress }: ICustomButtonProps) => {
    return (
        <Button
            mode="contained"
            onPress={onPress}
            style={{ flex: 1, maxHeight: 50, justifyContent: "center", alignItems: "center", width: "100%" }}
        >
            <Text theme={{ colors: { text: theme.colors.textPrimary } }}>
                {text}
            </Text>
        </Button>
    )
}