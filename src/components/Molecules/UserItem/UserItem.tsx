import React from 'react'
import { StyleSheet, View } from 'react-native'

import { User } from '../../../types/share/User'
import { Divider, Text } from 'react-native-paper'
import { Row } from '../../Atoms/Row/Row'
import { IconButtonCustom } from '../../Atoms/IconButtonCustom/IconButtonCustom'
import { theme } from '../../../config/theme-config'

interface UserItemProps {
    user: User
    onEdit: () => void
    onDelete: () => void
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 5,
    },
    userNameText: {
        fontSize: 18,
        fontWeight: '700',
    },
    rowWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divider: {
        marginVertical: 8,
    },
})

export const UserItem = ({ user, onDelete, onEdit }: UserItemProps) => {
    return (
        <>
            <View style={styles.itemWrapper}>
                <Row style={styles.rowWrapper}>
                    <Text
                        style={styles.userNameText}
                    >{`${user.name} ${user.lastname}`}</Text>

                    <View>
                        <Row>
                            <View>
                                <IconButtonCustom
                                    onPress={onEdit}
                                    icon="account-edit"
                                />
                            </View>
                            <View>
                                <IconButtonCustom
                                    onPress={onDelete}
                                    icon="delete"
                                    color={theme.colors.error}
                                />
                            </View>
                        </Row>
                    </View>
                </Row>
            </View>
            <Divider style={styles.divider}></Divider>
        </>
    )
}
