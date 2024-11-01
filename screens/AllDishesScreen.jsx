import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { dishes } from "../data/dishes-data";

const AllDishesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-2 left-4 bg-gray-50 p-2 rounded-full shadow z-[100]"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">All Dishes</Text>
          {/* <Text className="text-center text-gray-500">{restaurant?.name}</Text> */}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="py-5 px-5"
        style={{ marginTop: 10 }}
      >
        {dishes.map((dish, idx) => {
          return (
            <TouchableWithoutFeedback
              key={idx}
              onPress={() => navigation.navigate("Restaurant", { ...dish })}
            >
              <View
                style={{
                  shadowColor: themeColors.bgColor(0.2),
                  shadowRadius: 7,
                  marginVertical: 5,
                  flexDirection: "row",
                }}
              >
                <View
                  className="h-24"
                  style={{
                    aspectRatio: 1 / 1,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    className="h-full w-full object-scale-down"
                    source={{ uri: dish.image }}
                  />
                </View>

                <View style={{ marginLeft: 10, flexDirection: "column" }}>
                  <Text className="text-xl font-bold">{dish.name}</Text>
                  <Text
                    numberOfLines={1}
                    className="text-xs font-medium mt-1"
                    style={{ color: "gray" }}
                  >
                    {dish.description}
                  </Text>
                  <View style={{marginTop:4}} className="flex-row items-center space-x-1">
                    <Icon.Star
                      height="12"
                      width="12"
                      stroke={themeColors.bgColor(1)}
                      strokeWidth={2.5}
                    />
                    <Text className="text-xs">
                      <Text className="text-green-700">
                        {" "}
                        {dish.rating ?? "4.75"}{" "}
                      </Text>
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
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllDishesScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
