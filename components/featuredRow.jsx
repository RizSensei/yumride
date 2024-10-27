import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";
import { dishes } from "../data/dishes-data";

export default function FeaturedRow() {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-bold">Top Dishes Choice</Text>
          <Text className="text-sm text-gray-500">
            mouth watering taste
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
        {dishes?.map((dish, index) => (
          <RestaurantCard key={index} dish={dish} />
        ))}
      </ScrollView>
    </View>
  );
}
