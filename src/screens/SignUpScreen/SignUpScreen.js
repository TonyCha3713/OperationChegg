import React, {useState} from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {

    const navigation = useNavigation()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }
    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const onTermsOfUsePressed = () => {
        console.warn("SignUp Pressed")
    }
    const onPrivacyPressed = () => {
        console.warn("SignUp Pressed")
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Email" 
                value={email} 
                setValue={setEmail} 
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry 
            />
            <CustomInput 
                placeholder="Confirm password" 
                value={confirmPassword} 
                setValue={setConfirmPassword} 
                secureTextEntry 
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />    
            <Text style={styles.text}>
                By registering, you confirm that you accept our{' '} 
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
            </Text>
            <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY"/>    
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    }
})
 
export default SignUpScreen








