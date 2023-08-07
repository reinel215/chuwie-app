import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { theme } from '../../../config/theme-config'
import { RowWithIcon } from '../../Molecules/RowWithIcon/RowWithIcon'
import { Loading } from '../../Atoms/Loading/Loading'
import { HorizontalLine } from '../../Atoms/HorizontalLine/HorizontalLine'
import { Row } from '../../Atoms/Row/Row'
import { User } from '../../../types/share/User'

type UserDataProps = {
    loading: boolean
    user: User | undefined
    goToEdit: (userPropertyToUpdate: 'name' | 'lastname') => void
}

export const UserData = ({ loading, user, goToEdit }: UserDataProps) => {
    if (loading) {
        return <Loading style={{ marginTop: 36 }} />
    }

    return (
        <>
            <View style={{ paddingHorizontal: 16 }}>
                <RowWithIcon
                    renderText={() => (
                        <View>
                            <Text style={{ fontWeight: '900' }}>Nombre</Text>
                            <Text>{user?.name}</Text>
                        </View>
                    )}
                    renderIcon={() => (
                        <MaterialIcons
                            name="edit"
                            size={25}
                            color={theme.colors.primary}
                        />
                    )}
                    onPressIcon={() => goToEdit('name')}
                />

                <RowWithIcon
                    renderText={() => (
                        <View>
                            <Text style={{ fontWeight: '900' }}>Apellido</Text>
                            <Text>{user?.lastname}</Text>
                        </View>
                    )}
                    renderIcon={() => (
                        <MaterialIcons
                            name="edit"
                            size={25}
                            color={theme.colors.primary}
                        />
                    )}
                    onPressIcon={() => goToEdit('lastname')}
                />

                <HorizontalLine wrapperStyle={{ marginTop: 16 }} />

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: '900' }}>Correo</Text>
                        <Text>{user?.email}</Text>
                    </View>
                </Row>

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: '900' }}>
                            Documento de identidad
                        </Text>
                        <Text>{user?.docNumber}</Text>
                    </View>
                </Row>

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: '900' }}>Rol</Text>
                        <Text>{user?.role}</Text>
                    </View>
                </Row>

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: '900' }}>País</Text>
                        <Text>{user?.country}</Text>
                    </View>
                </Row>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    rowStyle: {
        justifyContent: 'space-between',
        marginTop: 16,
    },
})
