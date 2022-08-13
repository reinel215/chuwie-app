import React from "react"
import { StyleSheet, StyleSheetProperties, View, ViewStyle } from "react-native";


interface RowProps {
    children: React.ReactNode,
    style?: ViewStyle
}

export const Row = ({ children, style } : RowProps) => {
    return (
        <View style={[styles.row, style]} >
            { children }
        </View>
    );
}



const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        width: "100%"
    }
});