import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SearchHomework from "./SearchHomework";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import UploadStack from "./UploadStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "ExploreStack") {
            iconName = "search";
          }
          if (route.name === "UploadStack") {
            iconName = "file-upload";
          }
          if (route.name === "AccountStack") {
            iconName = "user";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        // tabBarInactiveBackgroundColor: "gray",
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "dodgerblue",

        // headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="ExploreStack" component={SearchHomework} />
      <Tab.Screen name="UploadStack" component={UploadStack} />
      <Tab.Screen name="AccountStack" component={AccountStack} />
    </Tab.Navigator>
  );
};

export default HomeStack;
