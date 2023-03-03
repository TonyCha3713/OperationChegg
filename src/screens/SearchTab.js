import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../colors/colors";

const SearchTab = () => {
  return (
    <View style={styles.container}>
      <Text>SearchTab</Text>
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

export default SearchTab;