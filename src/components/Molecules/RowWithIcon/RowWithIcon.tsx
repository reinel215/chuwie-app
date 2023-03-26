import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Row } from '../../Atoms/Row/Row';



interface RowWithIconProps {
    renderIcon: () => React.ReactNode;
    renderText: () => React.ReactNode;
    onPressIcon?: () => void;
}

export const RowWithIcon = ({ renderIcon, renderText, onPressIcon } : RowWithIconProps) => {
    return (
        <Row style={styles.rowStyle}>
            {
                renderText?.()
            }
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={onPressIcon}>
                    {renderIcon?.()}
                </TouchableOpacity>
            </View>
        </Row>
    )
}



const styles = StyleSheet.create({
    rowStyle: {
        justifyContent: "space-between",
        marginTop: 16
    }
})