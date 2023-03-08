import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import AuthStack from "./AuthStack";
import useAuth from "../hooks/useAuth";
import Tabs from "./tabs";

export default function AppNav() {
  const { jwt } = useAuth();
  console.log(jwt);
  return <SafeAreaView style={styles.container}>{jwt ? <Tabs /> : <AuthStack />}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
