import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { themeColors } from "../theme";
import CartIcon from "../components/cartIcon";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ ...item }));
  };

  return (
    <View className="h-full bg-white">
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="h-full relative">
          <Image
            className="h-72 w-full object-cover"
            source={{ uri: item.image }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <View className="bg-white -mt-12 pt-6 rounded-t-3xl">
            <View className="px-5">
              <Text className="text-3xl font-bold"> {item?.name} </Text>
              <View className="flex-row justify-between space-x-2 my-3">
                <View className="flex-row items-center space-x-1">
                  <Icon.Star
                    height="12"
                    width="12"
                    stroke={themeColors.bgColor(1)}
                    strokeWidth={2.5}
                  />
                  <Text className="text-sm">
                    <Text className="text-green-700">
                      {" "}
                      {item?.rating ?? 4}{" "}
                    </Text>
                    <Text className="text-gray-700">
                      &#40; 4.4K reviews&#41;
                    </Text>
                  </Text>
                </View>
                <Text className="text-gray-700 text-lg font-bold">
                  ${item.price}
                </Text>
                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={handleDecrease}
                    // disabled={!totalItems.length}
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
                  <Text className="px-3">1</Text>
                  <TouchableOpacity
                    onPress={handleIncrease}
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
              <Text className="text-gray-500 mt-2"> {item?.description} </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
