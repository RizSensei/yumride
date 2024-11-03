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
import AllDishesScreen from "./screens/AllDishesScreen";
import CartSummaryScreen from "./screens/CartSummaryScreen";
import OtpValidationScreen from "./screens/OtpValidationScreen";
import CategoryDishesScreen from "./screens/CategoryDishesScreen";
import NotificationScreen from "./screens/NotificationScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import OrderScreen from "./screens/OrderScreen";
import InboxScreen from "./screens/InboxScreen";
import MoreScreen from "./screens/MoreScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PaymentDrawerScreen from "./screens/PaymentDrawerScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarLabel: "Inbox",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Icon.Mail
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
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => (
            <Icon.Grid
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

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f2f2f2",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Payment" component={PaymentDrawerScreen} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          {/* <Stack.Screen name="Drawers" component={DrawerNavigator} /> */}

          {/* authentication screens  */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="OtpValidation" component={OtpValidationScreen} />

          {/* inner screens  */}
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="AllDishes" component={AllDishesScreen} />
          <Stack.Screen
            name="CategoryDishes"
            component={CategoryDishesScreen}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen} />
          <Stack.Screen name="CartSummary" component={CartSummaryScreen} />
          <Stack.Screen
            name="OrderPreparing"
            options={{ presentation: "fullScreenModal" }}
            component={OrderPreparingSCreen}
          />
          <Stack.Screen name="Orders" component={OrderScreen} />

          {/* profile related screens  */}
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
