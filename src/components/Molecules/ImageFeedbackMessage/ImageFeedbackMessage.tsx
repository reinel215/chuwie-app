import React from "react"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { Text } from "react-native-paper"

interface ImageFeedbackMessageProps {
    mainText: string;
    secondaryText: string;
    imageUrl?: number;
    secondaryTitle?: string;
    secondaryTitleSecondaryText?: string;
    textWrapperStyle?: ViewStyle;
}



export const ImageFeedbackMessage = ({ mainText, secondaryText, imageUrl, secondaryTitle, secondaryTitleSecondaryText, textWrapperStyle }: ImageFeedbackMessageProps) => {
    return (
        <View style={styles.imageFeedbackMessageWrapper} >
            {
                imageUrl ?
                    <Image source={imageUrl} />
                    :
                    null
            }

            <View style={textWrapperStyle}>
                <Text style={styles.mainText} >{mainText}</Text>
                <Text style={[styles.secondaryText, styles.merginTop]} >{secondaryText}</Text>
                <Text style={[styles.mainText, styles.merginTop]} >{secondaryTitle}</Text>
                <Text style={styles.secondaryText} >{secondaryTitleSecondaryText}</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    imageFeedbackMessageWrapper: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20,
        minHeight: 50
    },
    mainText: {
        textAlign: "center"
    },
    secondaryText: {
        textAlign: "center"
    },
    merginTop: {
        marginTop: 16
    }
});