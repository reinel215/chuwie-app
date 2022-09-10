import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { CustomButton } from "../../Atoms/CustomButton/CustomButton";
import { OutlinedTextInput } from "../../Atoms/OutlinedTextInput/OutlinedTextInput";



export const ForgotPasswordForm = () => {

    const { control } = useForm();

    return (
        <View style={styles.container}>

            <Text style={styles.verticalMargin}>Has olvidado la contraseña.</Text>

            <Text style={styles.verticalMargin}>Para resetearla ingresa tu correo y enviaremos un codigo para crear una nueva. </Text>

            <View style={styles.verticalMargin}>
                <OutlinedTextInput
                    label="Correo electronico"
                    control={control}
                    name="email"
                />
            </View>

            <View style={styles.buttonWrapper} >
                <CustomButton text={"Continuar"} onPress={() => { }} />
            </View>
        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16
    },
    verticalMargin: {
        marginBottom: 16
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        minHeight: 50
    }
});