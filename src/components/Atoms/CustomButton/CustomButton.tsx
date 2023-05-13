import React from "react";
import { Button, Text } from "react-native-paper";
import { theme } from "../../../config/theme-config";

interface ICustomButtonProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  color?: string;
  icon?: string;
}
//google color #dc4e42
export const CustomButton = ({
  text,
  onPress,
  loading = false,
  color,
  icon,
}: ICustomButtonProps) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={{
        flex: 1,
        height: 50,
        maxHeight: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      loading={loading}
      disabled={loading}
      color={color}
      icon={icon}
    >
      <Text theme={{ colors: { text: theme.colors.textPrimary } }}>{text}</Text>
    </Button>
  );
};
