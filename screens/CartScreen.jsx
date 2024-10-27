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
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import { themeColors } from "../theme";

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let delivery_charge = 5;

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
          {/* <Text className="text-center text-gray-500">{restaurant?.name}</Text> */}
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
        {cartItems.map((item, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mt-2"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {item.quantity}x
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: item.image }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {item.name}
              </Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart({ ...item }))}
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
                <Text className="px-3">${item.price * item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(addToCart({ ...item }))}
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
          <Text className="text-gray-700"> ${cartTotal} </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700"> Delivery Fee </Text>
          <Text className="text-gray-700"> ${delivery_charge} </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold"> Order Total </Text>
          <Text className="text-gray-700 font-extrabold"> ${cartTotal + delivery_charge} </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
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
