import React from "react"
import { StyleSheet } from "react-native"
import { Edge, SafeAreaView } from "react-native-safe-area-context"


interface SafeAreaWrapperProps {
    children: React.ReactNode;
    edges?: Edge[];
}

export const SafeAreaWrapper = ({ children ,edges }: SafeAreaWrapperProps) => {
    return (
        <SafeAreaView edges={edges} style={styles.container} >
            {children}
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    }
});