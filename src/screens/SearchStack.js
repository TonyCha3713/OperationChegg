import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeworkDetail from "./HomeworkDetail";
import SearchTab from "./SearchTab";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="SearchTab" component={SearchTab} />
      <Stack.Screen name="HomeworkDetail" component={HomeworkDetail} />
    </Stack.Navigator>
  );
}
