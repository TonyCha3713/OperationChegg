import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../colors/colors";

const PostTab = () => {
  return (
    <View style={styles.container}>
      <Text>PostTab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc'
  },
});

export default PostTab;
