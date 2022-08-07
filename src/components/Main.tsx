import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { theme } from "../config/theme-config";

const Main = () => {
  return (
    <View>
      <Text> Chuwie App </Text>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        <Text theme={{ colors: { text: theme.colors.textPrimary } }}>
          Chuwie App
        </Text>
      </Button>
    </View>
  );
};

export default Main;
