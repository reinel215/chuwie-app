import React from 'react'
import { useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useUserStore } from '../../../store/useUserStore'
import { CustomButton } from '../../Atoms/CustomButton/CustomButton'
import { OutlinedTextInput } from '../../Atoms/OutlinedTextInput/OutlinedTextInput'
import { UpdateUserFieldForm } from '../../../types/share/User'

const mapPropertyToLabel = {
    name: 'Nombre',
    lastname: 'Apellido',
}

interface EditUserFieldFormProps {
    onEdit: (formData: UpdateUserFieldForm) => {}
    loading?: boolean
}

export const EditUserFieldForm = ({
    onEdit,
    loading = false,
}: EditUserFieldFormProps) => {
    const { control, handleSubmit } = useForm()

    const { userPropertyToUpdate } = useUserStore((state) => ({
        userPropertyToUpdate: state.userPropertyToUpdate,
    }))

    return (
        <>
            <Text style={styles.screenTitle}>
                Editar {mapPropertyToLabel[userPropertyToUpdate]}
            </Text>

            <OutlinedTextInput
                label={mapPropertyToLabel[userPropertyToUpdate]}
                control={control}
                name={userPropertyToUpdate}
            />

            <View style={styles.buttonWrapper}>
                <CustomButton
                    text={'Guardar'}
                    onPress={handleSubmit(onEdit)}
                    loading={loading}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        minHeight: 50,
    },
    screenTitle: {
        marginTop: 12,
    },
})
