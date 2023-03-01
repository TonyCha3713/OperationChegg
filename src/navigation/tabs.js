import {View, Text, Image, StyleSheet, TouchableOpacity, Touchable, Pressable} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTab from '../screens/SearchTab';
import PostTab from '../screens/PostTab';
import FolderTab from '../screens/FolderTab'
import COLORS from "../colors/colors";
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    <TouchableOpacity style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>

    </TouchableOpacity>
}
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 50,
                    right: 50,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}>
            <Tab.Screen 
                name="Search" 
                component={SearchTab} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Icon 
                                name="ios-search"
                                size={26}
                                color={focused ? '#e32f45' : '#748c94'}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Search
                            </Text>
                        </View>
                    ),
                }}/>
            <Tab.Screen 
                name="Post" 
                component={PostTab} 
                options={{
                    tabBarIcon: () => (
                        <TouchableOpacity style={styles.shadow}>
                            <View style={{alignItems: 'center', justifyContent: 'center', top: -35, width: 80, height: 80}}>
                                <Icon 
                                    name="add-circle"
                                    size={80}
                                    color='#e32f45'
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}/>
            <Tab.Screen 
                name="Folder" 
                component={FolderTab} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Icon 
                                name="ios-folder"
                                size={26}
                                color={focused ? '#e32f45' : '#748c94'}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                                Folder
                            </Text>
                        </View>
                    ),
                }}/>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            widht: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;





