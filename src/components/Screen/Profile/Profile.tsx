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
import { RowWithIcon } from "../../Molecules/RowWithIcon/RowWithIcon";
import { Loading } from "../../Atoms/Loading/Loading";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const Profile = () => {

    const {
        getCurrentUserFetch,
        loadingGetUser,
        user,
        setUserPropertyToUpdate
    } = useUserStore(state => ({ getCurrentUserFetch: state.getCurrentUserFetch, loadingGetUser: state.loadingGetUser, user: state.user, setUserPropertyToUpdate: state.setUserPropertyToUpdate }));

    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        async function asyncFetch() {
            try {
                await getCurrentUserFetch()
            } catch (error) {

            }
        }
        asyncFetch();
    }, [])


    const goToEdit = (userPropertyToUpdate: "name" | "lastname") => {
        setUserPropertyToUpdate(userPropertyToUpdate);
        navigation.navigate("EditUser");
    }



    return (
        <SafeAreaWrapper style={{ paddingHorizontal: 0}} edges={["left", "right"]}>
            <View style={styles.topBarContainer}>
                <View style={styles.iconContainer} >
                    <FontAwesome name="user-circle" size={70} color={theme.colors.textPrimary} />
                </View>
            </View>

            {
                loadingGetUser ?
                    <Loading style={{ marginTop: 36 }} />

                    :
                    <>

                        <View style={{ paddingHorizontal: 16 }}>

                            <RowWithIcon
                                renderText={() =>
                                    <View>
                                        <Text style={{ fontWeight: "900" }} >Nombre</Text>
                                        <Text>{user?.name}</Text>
                                    </View>
                                }
                                renderIcon={() => <MaterialIcons
                                    name="edit"
                                    size={25}
                                    color={theme.colors.primary}
                                />}
                                onPressIcon={() => goToEdit("name")}
                            />




                            <RowWithIcon
                                renderText={() =>
                                    <View>
                                        <Text style={{ fontWeight: "900" }} >Apellido</Text>
                                        <Text>{user?.lastname}</Text>
                                    </View>
                                }
                                renderIcon={() => <MaterialIcons
                                    name="edit"
                                    size={25}
                                    color={theme.colors.primary}
                                />}
                                onPressIcon={() => goToEdit("lastname")}
                            />


                            <HorizontalLine wrapperStyle={{ marginTop: 16 }} />

                            <Row style={styles.rowStyle}>
                                <View>
                                    <Text style={{ fontWeight: "900" }} >Correo</Text>
                                    <Text>{user?.email}</Text>
                                </View>
                            </Row>

                            <Row style={styles.rowStyle}>
                                <View>
                                    <Text style={{ fontWeight: "900" }} >Documento de identidad</Text>
                                    <Text>{user?.docNumber}</Text>
                                </View>
                            </Row>

                            <Row style={styles.rowStyle}>
                                <View>
                                    <Text style={{ fontWeight: "900" }} >Rol</Text>
                                    <Text>{user?.role}</Text>
                                </View>
                            </Row>


                            <Row style={styles.rowStyle}>
                                <View>
                                    <Text style={{ fontWeight: "900" }} >País</Text>
                                    <Text>{user?.country}</Text>
                                </View>
                            </Row>
                        </View>
                    </>

            }

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