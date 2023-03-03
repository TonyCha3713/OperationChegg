import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, useWindowDimensions, Image, Keyboard } from 'react-native';
import COLORS from '../colors/colors'
import Input from '../components/Input';
import Logo from '../../assets/images/logo.png'
import Button from '../components/Button';
import Loader from './Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({navigation}) => {
    const [input, setInput] = useState({
        email: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    })
    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use Pressed");
    };
    const onPrivacyPressed = () => {
        console.warn("Privacy Policy Pressed");
    };
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const Register = () => {
        Keyboard.dismiss()
        let valid = true;
        if (!input.email) {
            handleError("Please input email", 'email')
            valid = false;
        } else if (!input.email.match(/\S+@\S+\.\S+/)) {
            handleError("Please input valid email", 'email')
            valid = false;
        }
        if (!input.fullName) {
            handleError("Please input fullname", 'fullName')
            valid = false;
        }
        if (!input.password) {
            handleError("Please input password", "password")
            valid = false;
        } else if (input.password.length < 8) {
            handleError("Min password length of 8", "password")
            valid = false;
        }
        if (!input.confirmPassword) {
            handleError("Please input password", 'confirmPassword')
            valid = false;
        } else if (input.confirmPassword != input.password) {
            handleError("Passwords do not match", 'confirmPassword')
            valid = false;
        }
        if (valid) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false)

                try {
                    AsyncStorage.setItem("user", JSON.stringify(input));
                    navigation.navigate("FindSchool")
                } catch (error) {
                    Alert.alert("Error", "Something went wrong")
                }
            }, 2500)
        }
    }
    const handleOnChange = (text, input) => {
        setInput(prevState => ({...prevState, [input]: text}));
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
                <Text style={{color: COLORS.white, fontSize: 40, fontWeight: 'bold'}}>Register</Text>
                <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>Enter Your Details to Register</Text>
                <View style={{marginVertical: 20}}>
                    <Input 
                        iconName="email-outline"
                        label="Email"
                        placeholder="Enter your email address"
                        placeholderTextColor={COLORS.grey}
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, 'email');
                        }}
                        onChangeText={text => handleOnChange(text, 'email')}
                    />
                    <Input 
                        iconName="account-outline"
                        label="Full Name"
                        placeholder="Enter your full name"
                        placeholderTextColor={COLORS.grey}
                        onChangeText={text => handleOnChange(text, 'fullName')}
                        error={errors.fullName}
                        onFocus={() => {
                            handleError(null, 'fullName');
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
                    <Input 
                        iconName="lock-outline"
                        label="Confirm password"
                        placeholder="Enter your password"
                        placeholderTextColor={COLORS.grey}
                        onChangeText={text => handleOnChange(text, 'confirmPassword')}
                        error={errors.confirmPassword}
                        onFocus={() => {
                            handleError(null, 'confirmPassword');
                        }}
                        password
                    />
                   <Button onPress={Register} title="Register"/> 
                        <Text style={styles.text}>
                            By registering, you confirm that you accept our{" "}
                        <Text style={styles.link} onPress={onTermsOfUsePressed}>
                            Terms of Use
                        </Text>{" "}
                        and{" "}
                        <Text style={styles.link} onPress={onPrivacyPressed}>
                            Privacy Policy
                        </Text>
                        </Text>
                   <Text
                        onPress={() => navigation.navigate("Login")} 
                        style={{color: COLORS.grey, textAlign: 'center', fontSIze: 16, fontWeight: 'bold', marginTop: 20}}>Already have account? <Text style={{ color: '#FDB075'}}>Login</Text></Text>
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

export default Registration