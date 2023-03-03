import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../colors/colors";

const FolderTab = () => {
  return (
    <View style={styles.container}>
      <Text>FolderTab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black
  },
});

export default FolderTab;