import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Alert, Keyboard } from "react-native";
import COLORS from "../colors/colors";
import Input from "../components/Input";
import Logo from "../../assets/images/logo.png";
import Button from "../components/Button";
import Loader from "./Loader";
import useAxios from "../hooks/useAxios";
import useStorage from "../hooks/useStorage";
import useAuth from "../hooks/useAuth";

const Login = ({ navigation }) => {
  const onTermsOfUsePressed = () => {
    console.warn("SignUp Pressed");
  };
  const onPrivacyPressed = () => {
    console.warn("SignUp Pressed");
  };
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const axios = useAxios();
  const { storeData } = useStorage();
  const { setJwt, setUser } = useAuth();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const Login = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input valid email", "email");
      valid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      valid = false;
    }
    if (valid) {
      try {
        setLoading(true);
        const resp = await axios.post("/users/signin", {
          email: inputs.email,
          password: inputs.password,
        });
        console.log(resp.data);
        if (resp.data) {
          console.log(resp.headers);
          const authtoken = resp.headers.authorization;
          setErrors({});
          storeData("jwt", authtoken);
          setJwt(authtoken);
          storeData("user", JSON.stringify(resp.data));
          setUser(resp.data);
          navigation.navigate("Tabs");
        }
      } catch (err) {
        console.log(err.response.data.message);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>Login</Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>Enter Your Details to Login</Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
          />
          <Input
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            onChangeText={(text) => handleOnChange(text, "password")}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
            password
          />
          <Button title="Log in" onPress={Login} />
          <Text
            onPress={() => navigation.navigate("Registration")}
            style={{ color: COLORS.black, textAlign: "center", fontSize: 16, fontWeight: "bold", marginTop: 20 }}
          >
            Dont have account? <Text style={{ color: "#FDB075" }}>Register</Text>
          </Text>
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
    alignSelf: "center",
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

export default Login;
