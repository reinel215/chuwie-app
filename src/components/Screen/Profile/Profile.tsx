import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaWrapper } from "../../Atoms/SafeAreaWrapper/SafeAreaWrapper";
import { theme } from "../../../config/theme-config";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Row } from "../../Atoms/Row/Row";
import { Text } from "react-native-paper";
import { HorizontalLine } from "../../Atoms/HorizontalLine/HorizontalLine";
import { useUserStore } from "../../../store/useUserStore";

export const Profile = () => {

    const getCurrentUserFetch = useUserStore(state => state.getCurrentUserFetch);

    useEffect(() => {

        async function asyncFetch(){
            try{
                await getCurrentUserFetch()

            }catch(error){

            }
        }

        asyncFetch();
    }, [])



    return (
        <SafeAreaWrapper style={{ paddingHorizontal: 0 }}>
            <View style={styles.topBarContainer}>
                <View style={styles.iconContainer} >
                    <FontAwesome name="user-circle" size={70} color={theme.colors.textPrimary} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 16 }}>
                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Nombre</Text>
                        <Text>Reinel</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <MaterialIcons name="edit" size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                </Row>


                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Apellido</Text>
                        <Text>Arteaga</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <MaterialIcons name="edit" size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                </Row>


                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Nombre</Text>
                        <Text>Reinel</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <MaterialIcons name="edit" size={25} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                </Row>

                <HorizontalLine wrapperStyle={{ marginTop: 16 }} />

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Correo</Text>
                        <Text>reinel.arteaga.trabajo@gmail.com</Text>
                    </View>
                </Row>

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Documento de identidad</Text>
                        <Text>27.042.411</Text>
                    </View>
                </Row>

                <Row style={styles.rowStyle}>
                    <View>
                        <Text style={{ fontWeight: "900" }} >Pais</Text>
                        <Text>Venezuela</Text>
                    </View>
                </Row>
            </View>
        </SafeAreaWrapper>
    )
}



const styles = StyleSheet.create({
    topBarContainer: {
        backgroundColor: theme.colors.primary,
        minHeight: Dimensions.get("window").height * 0.3
    },
    iconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    rowStyle: {
        justifyContent: "space-between",
        marginTop: 16
    }
})