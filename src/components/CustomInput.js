import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomInput = ({ iconName, value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} style={styles.logo}/>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={setValue} secureTextEntry={secureTextEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    height: 55,
    flexDirection: 'row'
  },
  input: {
    width: "100%",
  },
  logo: {
    fontSize: 22,
    marginRight: 10,
  },
});

export default CustomInput;
