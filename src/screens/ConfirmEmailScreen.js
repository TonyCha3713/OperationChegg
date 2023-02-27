import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };
  const onResendCodePressed = () => {};
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />

      <CustomButton text="Confirm" onPress={onConfirmPressed} />
      <CustomButton text="Resend code" onPress={onResendCodePressed} type="SECONDARY" />
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

export default ConfirmEmailScreen;