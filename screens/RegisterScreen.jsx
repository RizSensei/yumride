/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppTextInput from "../components/appTextInput";
import { themeColors } from "../theme";
import "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";

const authentication = getAuth();

const Register = () => {
  const navigation = useNavigation();

  const [hidePass, setHidePass] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        Toast.show({
          type: "success",
          text1: "Registration Successful",
        });
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
          backgroundColor: "white",
          flexDirection:"column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 250 }}
            resizeMode="contain"
            source={require("../assets/images/YumBites.png")}
          />
          <Text
            style={{
              fontSize: 28,
              color: themeColors.text,
              marginVertical: 0,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            placeholder="Password"
            secureTextEntry={hidePass ? true : false}
            value={password}
            onChangeText={setPassword}
          />
          <AppTextInput
            placeholder="Confirm Password"
            secureTextEntry={hidePass ? true : false}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity
          // onPress={() => handleSignUp()}
          onPress={() => navigation.navigate("OtpValidation")}
          style={{
            padding: 20,
            marginVertical: 10,
            backgroundColor: themeColors.text,
            borderRadius: 10,
            shadowColor: themeColors.text,
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: themeColors.text,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Back - Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
