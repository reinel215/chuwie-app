import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Row } from '../../Atoms/Row/Row';



interface RowWithIconProps {
    renderIcon: () => React.ReactNode;
    renderText: () => React.ReactNode;
}

export const RowWithIcon = ({ renderIcon, renderText } : RowWithIconProps) => {
    return (
        <Row style={styles.rowStyle}>
            {
                renderText?.()
            }
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
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