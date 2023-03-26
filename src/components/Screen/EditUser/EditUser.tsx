import { NavigationProp, useNavigation } from "@react-navigation/native"
import React from "react"
import { useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { useUserStore } from "../../../store/useUserStore"
import { UpdateUserFieldForm } from "../../../types/share/User"
import { CustomButton } from "../../Atoms/CustomButton/CustomButton"
import { OutlinedTextInput } from "../../Atoms/OutlinedTextInput/OutlinedTextInput"
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper"



const mapPropertyToLabel = {
    "name": "Nombre",
    "lastname": "Apellido"
}

export const EditUser = () => {


    const { control, handleSubmit } = useForm();
    const { loadingUpdateUser, updateUser, userPropertyToUpdate } = useUserStore(state => ({ loadingUpdateUser: state.loadingUpdateUser, updateUser: state.updateUser, userPropertyToUpdate: state.userPropertyToUpdate }));
    const navigation = useNavigation<NavigationProp<any>>();

    const onUpdate = async (formData: UpdateUserFieldForm) => {
        const newPropertyValue = formData[userPropertyToUpdate];
        if (!newPropertyValue) return;
        await updateUser(newPropertyValue);
        navigation.goBack();
    }

    return (
        <SafeAreaWrapper edges={["left", "right"]}  >
            <Text style={styles.screenTitle}>Editar {mapPropertyToLabel[userPropertyToUpdate]}</Text>

            <OutlinedTextInput
                label={mapPropertyToLabel[userPropertyToUpdate]}
                control={control}
                name={userPropertyToUpdate}
            />


            <View style={styles.buttonWrapper} >
                <CustomButton text={"Guardar"} onPress={handleSubmit(onUpdate)} loading={loadingUpdateUser} />
            </View>
        </SafeAreaWrapper>
    )
}



const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        minHeight: 50
    },
    screenTitle: {
        marginTop: 12
    }
});