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
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { useDispatch } from "react-redux";
import { useCart } from "../hooks/useCart";
import {
  addToCart,
  removeDish,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { themeColors } from "../theme";
import { showToastForEmptyCart } from "../components/toast";
import { styles } from "../services/styles";
import PageHeader from "../components/PageHeader";

const CartScreen = () => {
  const { cartItems, cartTotal } = useCart();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let delivery_charge = (0.05 * cartTotal).toFixed(2);
  let total_charge_after_delivery =
    parseFloat(delivery_charge) + parseFloat(cartTotal);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PageHeader label="Your Cart" backOption={true} />

      {/* <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/Take Away.gif")}
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
      </View> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
        className="bg-white"
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
                    height={18}
                    width={18}
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
                    height={18}
                    width={18}
                    stroke={"white"}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeDish(index))}
                className="p-1 rounded-full"
                style={{ backgroundColor: "red" }}
              >
                <Icon.Trash2
                  strokeWidth={2}
                  height={18}
                  width={18}
                  stroke={"white"}
                />
              </TouchableOpacity>
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
          <Text className="text-gray-700 font-extrabold">
            {" "}
            ${total_charge_after_delivery}{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={
              cartItems.length === 0
                ? showToastForEmptyCart
                : () => navigation.navigate("CartSummary")
            }
            // onPress={() => navigation.navigate("OrderPreparing")}
            // onPress={() => navigation.navigate("CartSummary")}
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
