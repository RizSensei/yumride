import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((category, index) => {
            let isActive = index === activeCategory;
            let BtnClass= isActive ? 'bg-[#FB923C]/90' : 'bg-gray-200';
            let TextClass= isActive ? 'font-semibold text-white' : 'bg-gray-5200';

          return (
            <View key={index} className="flex justify-center items-center mr-5">
              <TouchableOpacity 
              onPress={() => setActiveCategory(index)}
              className={`h-16 w-16 rounded-full p-1 flex flex-col items-center justify-center overflow-hidden ${BtnClass}`}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../assets/images/icons8-pizza-96.png")}
                />
                <Text className={`text-sm ${TextClass}`}>Pizza</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
