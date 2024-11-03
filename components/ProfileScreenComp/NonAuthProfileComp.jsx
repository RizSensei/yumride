import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { themeColors } from "../../theme";

const NonAuthProfileComp = () => {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full flex flex-col items-center justify-center">
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
    </View>
  );
};

export default NonAuthProfileComp;
