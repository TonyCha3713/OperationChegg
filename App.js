import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Navigation from "./src/navigation/index";
import { ContextProvider } from "./src/store/store";

export default function App() {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
