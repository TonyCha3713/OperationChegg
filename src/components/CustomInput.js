import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
    height: 40,
  },
  input: {
    width: "100%",
  },
});

export default CustomInput;
