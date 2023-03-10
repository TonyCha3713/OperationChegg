import React from "react";
import { TouchableOpacity, Text } from "react-native";
import COLORS from "../colors/colors";
const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 55,
        width: "100%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 5,
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
