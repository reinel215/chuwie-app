import React from 'react'
import { useForm } from 'react-hook-form'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { ISelectData } from '../../../types/share/ISelectData'
import { UserFormData, UserRole } from '../../../types/share/User'
import { CustomButton } from '../../Atoms/CustomButton/CustomButton'
import { OutlinedTextInput } from '../../Atoms/OutlinedTextInput/OutlinedTextInput'
import { PasswordInput } from '../../Atoms/PasswordInput/PasswordInput'
import { Select } from '../../Atoms/Select/Select'

const roles: ISelectData[] = [
    {
        label: 'Veterinario',
        value: UserRole.VETERINARIO,
    },
    {
        label: 'Rescatista',
        value: UserRole.RESCATISTA,
    },
    {
        label: 'Soporte',
        value: UserRole.SOPORTE,
    },
    {
        label: 'Administrativo',
        value: UserRole.ADMINISTRATIVO,
    },
    {
        label: 'Legal',
        value: UserRole.LEGAL,
    },
    {
        label: 'Alimentos',
        value: UserRole.ALIMENTOS,
    },
]

interface RegisterFormProps {
    onRegister: (user: UserFormData) => void
    isLoading?: boolean
    isSubUser?: boolean
}

const signupText = {
    title: 'Crea una cuenta',
    description:
        'Al crear una cuenta podras; reportar incidentes que pongan en peligro a las perezas, hacer un seguimiento del rescate y ver otras perezas rescatadas ',
}

const createSubUserText = {
    title: 'Crea un sub-usuario',
    description:
        'Al crear un sub-usuario; se le asignara la contraseña que indiques, podras verlo en la seccion de "Gestión de usuario" donde podras editarlo o eliminarlo.',
}

export const RegisterForm = ({
    onRegister,
    isLoading,
    isSubUser = false,
}: RegisterFormProps) => {
    const { control, handleSubmit } = useForm<any>()

    const text = isSubUser ? createSubUserText : signupText

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
                <Text style={styles.verticalMargin}>{text.title}</Text>

                <Text style={styles.verticalMargin}>
                    {text.description + ' '}
                </Text>

                <View style={styles.verticalMargin}>
                    <OutlinedTextInput
                        label="Nombre"
                        control={control}
                        name="name"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <OutlinedTextInput
                        label="Apellido"
                        control={control}
                        name="lastname"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <OutlinedTextInput
                        label="Correo electronico"
                        control={control}
                        name="email"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <OutlinedTextInput
                        label="País"
                        control={control}
                        name="country"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <OutlinedTextInput
                        label="Documento de identidad"
                        control={control}
                        name="docNumber"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <Select
                        label="Tipo de usuario"
                        control={control}
                        name="role"
                        data={roles}
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <PasswordInput
                        label="Crea tu contraseña"
                        control={control}
                        name="password"
                    />
                </View>

                <View style={styles.verticalMargin}>
                    <PasswordInput
                        label="Confirma tu contraseña"
                        control={control}
                        name="confirmPassword"
                    />
                </View>
            </ScrollView>

            <View style={styles.buttonWrapper}>
                <CustomButton
                    text={'Crear cuenta'}
                    onPress={handleSubmit(onRegister)}
                    loading={isLoading}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    verticalMargin: {
        marginBottom: 16,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        minHeight: 50,
    },
})
