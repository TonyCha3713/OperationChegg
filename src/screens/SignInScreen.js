import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../assets/images/Logo_1.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    navigation.navigate("Home");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
      <View style={styles.main}>
        <CustomInput placeholder="Enter your email address" value={username} setValue={setUsername} iconName="email-outline"/>
        <CustomInput placeholder="Enter your password" value={password} setValue={setPassword} secureTextEntry iconName="lock-outline"/>
        <CustomButton text="Sign In" onPress={onSignInPressed} />
      </View>
      <View style={styles.extra}>
        {/* <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" /> */}
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
    top: 10,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
  },
  extra: {
    position: "absolute",
    bottom: 10,
  },
});

export default SignInScreen;
