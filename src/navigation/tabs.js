import { View, Text, Image, StyleSheet, TouchableOpacity, Touchable, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTab from "../screens/SearchTab";
import PostTab from "../screens/PostTab";
import FolderTab from "../screens/FolderTab";
import COLORS from "../colors/colors";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          //   height: 90,
          backgroundColor: COLORS.black,
          borderTopWidth: 0.5,
          borderTopColor: "#525452",
        },
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
              <Icon name="home-outline" size={26} color={focused ? COLORS.blue : COLORS.white} />
              <Text style={{ color: focused ? COLORS.blue : COLORS.white, fontSize: 10, fontWeight: "bold" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 3, width: 80, height: 80 }}>
              <Icon name="add-circle" size={26} color={focused ? COLORS.blue : COLORS.white} />
              <Text style={{ color: focused ? COLORS.blue : COLORS.white, fontSize: 10, fontWeight: "bold" }}>Upload</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={FolderTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
              <Icon name="ios-folder" size={26} color={focused ? COLORS.blue : COLORS.white} />
              <Text style={{ color: focused ? COLORS.blue : COLORS.white, fontSize: 10, fontWeight: "bold" }}>Folder</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
