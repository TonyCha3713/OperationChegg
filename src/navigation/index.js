import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import FindSchool from "../screens/FindSchool";
import HomeStack from "../screens/HomeStack";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" options={{ headerTitle: "Sign in" }} component={SignInScreen} />
        <Stack.Screen name="SignUp" options={{ headerTitle: "Sign up" }} component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" options={{ headerTitle: "Confirm Email" }} component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" options={{ headerTitle: "Forgot Password" }} component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" options={{ headerTitle: "New Password" }} component={NewPasswordScreen} />
        <Stack.Screen name="Home" options={{ headerTitle: "Home" }} component={HomeScreen} />
        <Stack.Screen name="FindSchool" options={{ headerTitle: "Find School" }} component={FindSchool} />
        <Stack.Screen name="HomeStack" options={{ headerShown: false }} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
