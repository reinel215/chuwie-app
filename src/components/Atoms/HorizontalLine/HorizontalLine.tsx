import React from "react"
import { View, ViewStyle } from "react-native"


interface HorizontalLineProps {
    children?: React.ReactNode;
    lineStyle?: ViewStyle | ViewStyle[];
    wrapperStyle ? : ViewStyle;
}

export const HorizontalLine = ({ children, lineStyle, wrapperStyle } : HorizontalLineProps) => {

    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, wrapperStyle ]}>
            <View style={[{ flex: 1, height: 1, backgroundColor: '#B2B4B8' }, lineStyle]} />
            {children}
            <View style={[{ flex: 1, height: 1, backgroundColor: '#B2B4B8' }, lineStyle]} />
        </View>

    )

}