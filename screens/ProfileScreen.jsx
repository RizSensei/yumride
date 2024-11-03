import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import AuthProfileComp from "../components/ProfileScreenComp/AuthProfileComp";
import NonAuthProfileComp from "../components/ProfileScreenComp/NonAuthProfileComp";
import { useAuth } from "../context/AuthContext";

export default function ProfileScreen() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {!isAuthenticated ? <NonAuthProfileComp /> : <AuthProfileComp />}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   AndroidSafeArea: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
