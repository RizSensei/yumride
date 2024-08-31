import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({ restaurant }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...restaurant })}
    >
      <View
        className="mr-6 bg-white rounded-3xl shadow-xl shadow-gray-200 overflow-hidden"
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
      >
        <Image
          className="h-36 w-64"
          source={require("../assets/images/demo-image-restaurant.jpg")}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-xl font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star
              height="12"
              width="12"
              stroke={themeColors.bgColor(1)}
              strokeWidth={2.5}
            />
            <Text className="text-xs">
              <Text className="text-green-700"> {restaurant.rating} </Text>
              <Text className="text-gray-700">
                &#40; 4.4K reviews&#41; .
                <Text className="font-semibold">{restaurant.cuisine}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-sm">
              {" "}
              Nearby&nbsp;.&nbsp;{restaurant.address.street}{" "}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
