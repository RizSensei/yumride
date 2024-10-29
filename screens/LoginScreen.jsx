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
import { useAuth } from "../context/AuthContext";
import "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showToastForIncorrectCredentials } from "../components/toast";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState(false);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authentication = getAuth();
  
  const { setLoggedInUser } = useAuth();

  const handleSignIn = async () => {
    // setIsLoading(true);

    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log("successful");
        setLoggedInUser(res.user);
      })
      .catch((err) => {
        showToastForIncorrectCredentials();
      });

    // .finally(() => setIsLoading(false));
  };

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
            Login
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
            value={password}
            onChangeText={setPassword}
          />
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
        onPress={() => handleSignIn()}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            marginTop: 10
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

export default Login;
