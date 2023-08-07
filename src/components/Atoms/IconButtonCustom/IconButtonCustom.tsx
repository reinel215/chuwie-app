import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon'
import { theme } from '../../../config/theme-config'

interface IconButtonCustomProps {
    styles?: ViewStyle
    icon: IconSource
    onPress: () => void
    color?: string
}

export const IconButtonCustom = (props: IconButtonCustomProps) => {
    return (
        <IconButton
            styles={styles.buttonStyles}
            color={theme.colors.primary}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    buttonStyles: {
        height: 30,
        maxHeight: 30,
        width: 'auto',
    },
})
