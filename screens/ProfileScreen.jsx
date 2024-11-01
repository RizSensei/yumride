import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleSignOut = async() => {
    try{
      await signOut();
      setIsAuthenticated(false);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="h-full w-full flex flex-col items-center justify-center">
        {!isAuthenticated ? (
          <View className="flex-row justify-center items-center gap-10">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-xl font-semibold">Login</Text>
            </TouchableOpacity>
            <Text
              className="font-extrabold text-5xl"
              style={{ color: themeColors.bgColor(1) }}
            >
              |
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="text-xl font-semibold">Register</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 9999,
                  borderWidth: 2,
                  borderColor: "green",
                  overflow:'hidden'
                }}
              >
                <Image
                  source={require("../assets/images/profile-picture.jpg")}
                  className="w-full h-full"
                />
              </View>
              <TouchableOpacity onPress={() => handleSignOut()}>
                <Text
                  style={{
                    marginTop: 10,
                    backgroundColor: themeColors.text,
                    color: "white",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 10,
                    alignText: "center",
                    fontSize: 20,
                  }}
                >
                  Sign Out
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
