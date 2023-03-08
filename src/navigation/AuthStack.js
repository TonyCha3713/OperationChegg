import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Registration";
import Login from "../screens/Login";
import FindSchool from "../screens/FindSchool";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="FindSchool" component={FindSchool} />
    </Stack.Navigator>
  );
}
