import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  container_PRIMARY: {
    backgroundColor: "#3B71F3",
    width: "100%",
  },
  container_SECONDARY: {
    width: "100%",
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    color: "#3B71F3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
