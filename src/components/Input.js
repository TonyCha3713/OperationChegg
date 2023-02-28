import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../colors/colors';
const Input = ({ label, iconName, password, error, onFocus = () => {}, ...props }) => {
    const [hidePassword, setHidePassword] = useState(password)
    const [isFocused, setIsFocused] = useState(false);
    return (
    <View style={{marginBottom: 20}}>
        {/* <Text style={styles.label}>{label}</Text> */}
        <View style={[styles.inputContainer, {borderColor: error ? COLORS.red:isFocused ? COLORS.darkBlue : COLORS.light}]}>
            <Icon 
                name={iconName}
                style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10}}
            />
            <TextInput 
                onFocus={() => {
                    onFocus()
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                autoCapitalize='none'
                secureTextEntry={hidePassword}
                autoCorrect={false}
                style={{color: COLORS.darkBlue, flex: 1}} 
                {...props}
            />
            {password &&
                <Icon 
                    onPress={() => setHidePassword(!hidePassword)}
                    style={{fontSize: 22, color: COLORS.darkBlue}}
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                />
            }
        </View>
        {error && 
            <Text style={{color: COLORS.red, fontSize: 12, marginTop: 7}}>{error}</Text>
        }
    </View>
    );
};


const styles = StyleSheet.create({
    label: {
        marginVertical: 5,
        fontSize: 14,
        color: COLORS.grey
    },
    inputContainer: {
        height: 55,
        background: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
    },
});

export default Input;