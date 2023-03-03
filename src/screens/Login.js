import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, useWindowDimensions, Image, Alert, Keyboard } from 'react-native';
import COLORS from '../colors/colors'
import Input from '../components/Input';
import Logo from '../../assets/images/logo.png'
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './Loader'

const Login = ({navigation}) => {
    const onTermsOfUsePressed = () => {
        console.warn("SignUp Pressed");
    };
    const onPrivacyPressed = () => {
        console.warn("SignUp Pressed");
    };
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const Login = () => {
        Keyboard.dismiss()
        let valid = true
        if (!inputs.email) {
            handleError("Please input email", 'email')
            valid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError("Please input valid email", 'email')
            valid = false;
        }
        if (!inputs.password) {
            handleError("Please input password", "password")
            valid = false;
        }
        if (valid) {
            setLoading(true);
            setTimeout(async() => {
                setLoading(false)
                let userData = await AsyncStorage.getItem('user');
                if (userData) {
                    userData = JSON.parse(userData);
                    if (inputs.email == userData.email &&
                        inputs.password == userData.password) {
                            AsyncStorage.setItem('user', JSON.stringify({...userData, loggedIn: true}))
                            navigation.navigate("Home")
                        }
                    else {
                        Alert.alert("Error", "Incorrect username or password")
                    }
                } else {
                    Alert.alert("Error", "Incorrect username or password")
                }
            }, 2500)
        }
    }
    const handleOnChange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    }
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({...prevState, [input]: errorMessage}));
    }
    return (
        <SafeAreaView style={{backgroundColor: COLORS.black, flex: 1}}>
            <Loader visible={loading}/>
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 50,
                    paddingHorizontal: 20,
                }}>
                <Text style={{color: COLORS.white, fontSize: 40, fontWeight: 'bold'}}>Login</Text>
                <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>Enter Your Details to Login</Text>
                <View style={{marginVertical: 20}}>
                    <Input 
                        iconName="email-outline"
                        label="Email"
                        placeholder="Enter your email address"
                        placeholderTextColor={COLORS.grey}
                        onChangeText={text => handleOnChange(text, 'email')}
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, 'email');
                        }}
                        
                    />
                    <Input 
                        iconName="lock-outline"
                        label="Password"
                        placeholder="Enter your password"
                        placeholderTextColor={COLORS.grey}
                        onChangeText={text => handleOnChange(text, 'password')}
                        error={errors.password}
                        onFocus={() => {
                            handleError(null, 'password');
                        }}
                        password
                    />
                   <Button title="Log in" onPress={Login}/> 
                   <Text
                        onPress={() => navigation.navigate("Registration")}
                        style={{color: COLORS.grey, textAlign: 'center', fontSIze: 16, fontWeight: 'bold', marginTop: 20}}>Dont have account? <Text style={{ color: '#FDB075'}}>Register</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: "70%",
        maxWidth: 140,
        maxHeight: 70,
        alignSelf: 'center',
        marginBottom: 20,
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075",
    },
});

export default Login