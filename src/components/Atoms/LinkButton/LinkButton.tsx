import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../../../config/theme-config";


interface ILinkButtonProps {
    text: string;
    onPress: () => void
}


export const LinkButton = ({ text }: ILinkButtonProps) => {
    return (
        <TouchableOpacity>
            <Text theme={{ colors: { text: theme.colors.primary } }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}