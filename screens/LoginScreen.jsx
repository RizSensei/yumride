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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState(false);
  const navigation = useNavigation();

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
              fontSize: 30,
              color: themeColors.text,
              marginVertical: 30,
              fontWeight: "bold",
            }}
          >
            Login Here
          </Text>
          <Text
            style={{
              fontSize: 24,
              maxWidth: "60%",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            YumRide
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <View>
          <Text
            style={{
              fontSize: 14,
              color: themeColors.text,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 20,
            marginVertical: 20,
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
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
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
            Create new account
          </Text>
        </TouchableOpacity>
        {/* 
        <View style={{ marginVertical: 30 }}>
          <Text
            style={{
              color: themeColors.text,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            or continue with
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-google" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-apple" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-twitter" color="#000" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#ddd",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Ionicons name="logo-facebook" color="#000" size={20} />
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
