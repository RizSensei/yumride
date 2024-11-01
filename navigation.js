import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CartScreen from "./screens/CartScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderPreparingSCreen from "./screens/OrderPreparingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

import { Text, View } from "react-native";
import * as Icon from "react-native-feather";
import { useCart } from "./hooks/useCart";
import CartSummaryScreen from "./screens/CartSummaryScreen";
import StartScreen from "./screens/StartScreen";
import AllDishesScreen from "./screens/AllDishesScreen";
import OtpValidationScreen from "./screens/OtpValidationScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { cartItemsLength } = useCart();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="Start" component={StartScreen} /> */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Icon.Home
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <View style={{ position: "relative" }}>
              <Icon.ShoppingCart
                height="25"
                width="25"
                stroke={focused ? "green" : "gray"}
              />
              <View
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "green",
                  borderRadius: 10,
                  width: 16,
                  height: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 10 }}>
                  {cartItemsLength}
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Icon.User
              height="25"
              width="25"
              stroke={focused ? "green" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabNavigator} />

          {/* authentication screens  */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OtpValidation" component={OtpValidationScreen} />

          {/* inner screens  */}
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="AllDishes" component={AllDishesScreen} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} />
          <Stack.Screen name="CartSummary" component={CartSummaryScreen} />
          <Stack.Screen
            name="OrderPreparing"
            options={{ presentation: "fullScreenModal" }}
            component={OrderPreparingSCreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
