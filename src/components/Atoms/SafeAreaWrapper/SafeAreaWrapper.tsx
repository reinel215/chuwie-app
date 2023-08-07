import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

interface SafeAreaWrapperProps {
    children: React.ReactNode
    edges?: Edge[]
    style?: ViewStyle
}

export const SafeAreaWrapper = ({
    children,
    edges,
    style,
}: SafeAreaWrapperProps) => {
    return (
        <SafeAreaView edges={edges} style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
})
