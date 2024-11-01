import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeComp from "../components/StartScreenComp/HomeComp";
import LoaderComp from "../components/StartScreenComp/LoaderComp";
import StarterComp from "../components/StartScreenComp/StarterComp";
import { Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [component, setComponent] = useState(1);

  const handlePressExplore = () => {
    setComponent(3);
  }

  useEffect(() => {
    setTimeout(() => {
      setComponent(2);
    }, 3000);
  }, []);

  const RenderComponent = () => {
    switch (component) {
      case 1:
        return <LoaderComp />;
        break;
      case 2:
        return <StarterComp handlePressExplore={handlePressExplore} />;
        break;
      case 3:
        return <HomeComp />;
        break;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {RenderComponent()}
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