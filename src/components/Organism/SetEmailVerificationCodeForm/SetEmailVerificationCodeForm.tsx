import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { CustomButton } from "../../Atoms/CustomButton/CustomButton";
import { OutlinedTextInput } from "../../Atoms/OutlinedTextInput/OutlinedTextInput";



export const SetEmailVerificationCodeForm = () => {

    const { control } = useForm();
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.container}>

            <Text style={styles.verticalMargin}>Hola usuario!</Text>

            <Text style={styles.verticalMargin}>We sent you a verification code to user@email.com. copy and paste that code below.</Text>

            <View style={styles.verticalMargin}>
                <OutlinedTextInput
                    label="Codigo"
                    control={control}
                    name="code"
                />
            </View>

            <View style={styles.buttonWrapper} >
                <CustomButton text={"Reenviar codigo"} onPress={() => navigation.navigate("CreateNewPassword")} />
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