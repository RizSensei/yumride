import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";
import CartIcon from "../components/cartIcon";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { themeColors } from "../theme";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
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
                    onPress={handleAddToCart}
                    className="p-1 rounded-full"
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                  >
                    <Text
                      style={{
                        color: "white",
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                      }}
                    >
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-gray-500 mt-2"> {item?.description} </Text>

              <View
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <View
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: themeColors.bgColor(0.5),
                  }}
                >
                  <Text style={{ color: "white" }}>
                    You have already added the dish in the cart.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
