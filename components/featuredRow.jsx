import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";
import { restaurants } from "../assets/data/data";

export default function FeaturedRow() {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-bold">Hot and Spicy</Text>
          <Text className="text-sm text-gray-500">
            soft and render fried chicken
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{ color: themeColors.text }}
            className="font-semibold w-max"
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible py-5"
      >
        {restaurants?.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </ScrollView>
    </View>
  );
}
