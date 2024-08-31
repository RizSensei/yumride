import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import * as Icon from "react-native-feather";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { themeColors } from "../theme";

export default function HomeScreen() {
  return (
    <SafeAreaView className="pb-10">
      <StatusBar barStyle="dark-content" />

      {/* search bar  */}
      <View className="bg-white flex-row items-center space-x-2 px-2 py-2">
        <View className="w-full flex-row flex-1 items-center p-3 rounded-full border border-gray-500">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="w-full flex-row flex-1 items-center pl-2 border-l-2 border-gray-300">
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* main  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20}}
      >
        {/* categories  */}
        <Categories />

        {/* featured  */}
        <View className="mt-5 px-5">
          {[1,2,3].map((index) => {
            return <FeaturedRow key={index}/>;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
