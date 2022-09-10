import React from "react";
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import { CustomButton } from "../../Atoms/CustomButton/CustomButton";
import { ImageFeedbackMessage } from "../../Molecules/ImageFeedbackMessage/ImageFeedbackMessage";


interface UserFeedbackProps {
    onPress: () => void;
    mainText: string;
    secondaryText: string;
    buttonContainerStyle?: StyleProp<ViewStyle>;
    buttonLabel: string;
    secondaryButtonLabel?: string;
    onPressSecondaryButton?: () => void;
    buttonType?: "solid" | "outline" | "clear-underline";
    secondaryTitle?: string;
    secondaryTitleSecondaryText?: string;
}

CustomButton

export const UserFeedback = ({ buttonContainerStyle, onPress, mainText, secondaryText, buttonLabel, secondaryButtonLabel, buttonType = "solid", onPressSecondaryButton = () => { }, secondaryTitle, secondaryTitleSecondaryText }: UserFeedbackProps) => {



    return (
        <>
            <View style={styles.feedBackWrapper} >
                <ImageFeedbackMessage
                    mainText={mainText}
                    secondaryText={secondaryText}
                    secondaryTitle={secondaryTitle}
                    secondaryTitleSecondaryText={secondaryTitleSecondaryText}
                />
            </View>
            <View style={[styles.buttonWrapper, buttonContainerStyle]}>
                {
                    secondaryButtonLabel ?
                        <CustomButton onPress={onPressSecondaryButton} text={secondaryButtonLabel} />
                        :
                        null
                }
                <CustomButton onPress={onPress} text={buttonLabel} />
            </View>
        </>

    )
}


const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        minHeight: 50
    },
    feedBackWrapper: {
        flex: 5,
    },
    buttonSecondary: {
        marginBottom: 16
    }
});