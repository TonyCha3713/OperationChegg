import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/navigation/AppNav";
import { ContextProvider } from "./src/store/store";

export default function App() {
  return (
    <View style={styles.root}>
      <NavigationContainer>
        <ContextProvider>
          <AppNav />
        </ContextProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
