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
import { useCart } from "../hooks/useCart";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

const CartSummaryScreen = () => {
  const { cartItems, cartTotal } = useCart();
  const navigation = useNavigation();

  let delivery_charge = (0.05 * cartTotal).toFixed(2);
  let total_charge_after_delivery =
    parseFloat(delivery_charge) + parseFloat(cartTotal);

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
          <Text className="text-center font-bold text-xl">
            Your Cart Summary
          </Text>
          {/* <Text className="text-center text-gray-500">{restaurant?.name}</Text> */}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
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
                className="h-8 w-8 rounded-full"
                source={{ uri: item.image }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {item.name}
              </Text>
              <View className="flex-row items-center">
                <Text
                  style={{ color: themeColors.text }}
                  className="px-3 font-semibold"
                >
                  ${item.price * item.quantity}
                </Text>
              </View>
            </View>
          );
        })}

        <View
          style={{
            flex: 1,
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
        ></View>

        <View
          style={{
            width: "100%",
            marginTop: 20,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>Delivery Charges: </Text>
            <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
              ${delivery_charge}
            </Text>
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 10,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>Total Amount: </Text>
            <Text style={{ color: themeColors.text, fontWeight: "bold" }}>
              ${total_charge_after_delivery}
            </Text>
          </Text>
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.2), margin: 10 }}
          className="p-6 space-y-4"
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color:themeColors.text }}
          >
            Apply Promo Code to get 5% off !!!
          </Text>
        </View>
      </ScrollView>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4"
      >
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
    </SafeAreaView>
  );
};

export default CartSummaryScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
