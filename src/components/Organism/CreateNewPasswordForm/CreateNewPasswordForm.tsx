import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { CustomButton } from "../../Atoms/CustomButton/CustomButton";
import { OutlinedTextInput } from "../../Atoms/OutlinedTextInput/OutlinedTextInput";


export const CreateNewPasswordForm = () => {

    const { control } = useForm();
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.container}>

            <Text style={styles.verticalMargin}>Ingresa tu nueva contraseña</Text>

            <View style={styles.verticalMargin}>
                <OutlinedTextInput
                    label="Nueva contraseña"
                    control={control}
                    name="password"
                />
            </View>

            <View style={styles.verticalMargin}>
                <OutlinedTextInput
                    label="Confirme la nueva contraseña"
                    control={control}
                    name="confirmPassword"
                />
            </View>


            <View style={styles.buttonWrapper} >
                <CustomButton text={"Continuar"} onPress={() => navigation.navigate("PasswordCreatedSuccess")} />
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