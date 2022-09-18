import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Images from "../../../constants/Images/Images";
import { CustomButton } from "../../Atoms/CustomButton/CustomButton";
import { LinkButton } from "../../Atoms/LinkButton/LinkButton";
import { OutlinedTextInput } from "../../Atoms/OutlinedTextInput/OutlinedTextInput";
import { PasswordInput } from "../../Atoms/PasswordInput/PasswordInput";
import { Row } from "../../Atoms/Row/Row";
import { useForm } from "react-hook-form";
import { NavigationProp, useNavigation } from "@react-navigation/native";


interface LoginFormProps {
    onLogin: () => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.contentWrapper} >
            <View style={styles.logoWrapper}>
                <Image style={styles.logoStyle} source={Images.logo} />
            </View>

            <View style={styles.formWrapper} >

                <View style={styles.formTitleWrapper} >
                    <Text>
                        Inicio de sesión
                    </Text>
                </View>

                <View style={styles.formInputsWrapper} >
                    <OutlinedTextInput
                        label="Correo electronico"
                        control={control}
                        name="email"
                    />

                    <PasswordInput
                        label="Contraseña"
                        control={control}
                        name="password"
                    />
                </View>


                <View style={styles.forgotPasswordTextWrapper}>
                    <LinkButton text="Olvidaste la contraseña?" onPress={() => navigation.navigate("ForgotPassword")} />
                </View>



                <View style={styles.formBottomButtonsWrapper}>
                    <CustomButton text={"Iniciar sesión"} onPress={handleSubmit(onLogin)} />
                </View>



                <View style={styles.signupButtonWrapper} >
                    <Row style={styles.rowStyle} >
                        <Text>
                            Aun no tienes una cuenta ?
                        </Text>

                        <LinkButton text="Registrate" onPress={() => navigation.navigate("Register")} />
                    </Row>

                </View>

            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    contentWrapper: {
        flex: 1,
        alignItems: "center"
    },
    logoWrapper: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    logoStyle: {
        maxWidth: 200,
        maxHeight: 200
    },
    formWrapper: {
        flex: 4,
        width: "100%",
    },
    marginVertical: {
        marginVertical: 10
    },
    forgotPasswordTextWrapper: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flex: 1,
        paddingVertical: 5,
    },
    formInputsWrapper: {
        flex: 3,
        justifyContent: "space-between",
    },
    formBottomButtonsWrapper: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    formTitleWrapper: {
        flex: 1,
        alignItems: "center"
    },
    rowStyle: {
        justifyContent: "center",
        marginTop: 10
    },
    signupButtonWrapper: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center",
    }
});