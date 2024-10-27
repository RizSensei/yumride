import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ dish }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...dish })}
    >
      <View
        className="mr-6 bg-white rounded-3xl shadow-xl shadow-gray-200 overflow-hidden"
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
      >
        <View className="h-36 w-64">
          <Image
            className="h-full w-full object-scale-down"
            source={{uri:dish.image}}
          />
        </View>
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-xl font-bold pt-2">{dish.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star
              height="12"
              width="12"
              stroke={themeColors.bgColor(1)}
              strokeWidth={2.5}
            />
            <Text className="text-xs">
              <Text className="text-green-700"> {dish.rating ?? "4.75"} </Text>
              <Text className="text-gray-700">
                &#40; 4.4K reviews&#41; .
                <Text className="font-semibold">{dish.category}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
