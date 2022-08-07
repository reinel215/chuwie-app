import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Main from "./src/components/Main";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/services/react-query/query-client";
import { theme } from "./src/config/theme-config";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Main />
        </View>
      </PaperProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
