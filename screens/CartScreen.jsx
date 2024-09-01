import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
// import { restaurants } from "../assets/data/data";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux/slices/restaurantSlice";

const CartScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-4 left-4 bg-gray-50 p-2 rounded-full shadow z-[100]"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/Take Away-rafiki.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4 font-semibold">
          Deliver in 20-30 minutes
        </Text>
        <TouchableOpacity>
          <Text
            className="font-bold text-xl"
            style={{ color: themeColors.text }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {restaurant.menu.map((item, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mt-2"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2x
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={require(`../assets/images/dish/dish-1.jpg`)}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {item.name}
              </Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="p-1 rounded-full"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                  <Icon.Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke={"white"}
                  />
                </TouchableOpacity>
                <Text className="px-3">$120</Text>
                <TouchableOpacity
                  className="p-1 rounded-full"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                  <Icon.Plus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke={"white"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700"> Subtotal </Text>
          <Text className="text-gray-700"> $20 </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700"> Delivery Fee </Text>
          <Text className="text-gray-700"> $20 </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold"> Order Total </Text>
          <Text className="text-gray-700 font-extrabold"> $20 </Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={() =>navigation.navigate('OrderPreparing') }
          style={{backgroundColor:themeColors.bgColor(1)}} className= "p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
