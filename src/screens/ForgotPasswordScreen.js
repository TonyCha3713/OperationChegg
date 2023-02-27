import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ForgotPasswordScreen = ({ navigation }) => {
  const onConfirmPressed = () => {
    navigation.navigate("NewPassword");
  };
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput placeholder="Username" value={username} setValue={setUsername} />

      <CustomButton text="Send" onPress={onConfirmPressed} />
      <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ForgotPasswordScreen;
