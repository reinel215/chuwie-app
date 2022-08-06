import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Main = () => {
  return (
    <View>
      <Text> Chuwie App </Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
};

export default Main;
