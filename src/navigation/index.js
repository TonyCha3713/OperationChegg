import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindSchool from "../screens/FindSchool";
import Registration from "../screens/Registration";
import Login from "../screens/Login";
import Tabs from "./tabs";
import { ContextProvider } from "../store/store";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="FindSchool" component={FindSchool} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
