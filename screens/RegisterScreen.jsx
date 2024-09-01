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

const Register = () => {
  const [focused, setFocused] = useState(false);
  const navigation = useNavigation();

  const [hidePass, setHidePass] = useState(true);

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 100 }}
            resizeMode="contain"
            source={require("../assets/images/Hamburger.gif")}
          />
          <Text
            style={{
              fontSize: 20,
              color: themeColors.text,
              marginVertical: 5,
              fontWeight: "bold",
            }}
          >
            Create Account
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppTextInput placeholder="Name" />
          <AppTextInput placeholder="Email" />
          <AppTextInput
            placeholder="Password"
            secureTextEntry={hidePass ? true : false}
          />
          <AppTextInput
            placeholder="Confirm Password"
            secureTextEntry={hidePass ? true : false}
          />
        </View>
        <TouchableOpacity
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
      </View>
    </SafeAreaView>
  );
};

export default Register;
