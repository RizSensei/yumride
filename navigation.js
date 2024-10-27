import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CartScreen from "./screens/CartScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderPreparingSCreen from "./screens/OrderPreparingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import ProfileScreen from "./screens/ProfileScreen";

import * as Icon from "react-native-feather";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon.Home height="25" width="25" stroke="gray" />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: () => (
            <Icon.ShoppingCart height="25" width="25" stroke="gray" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <Icon.User height="25" width="25" stroke="gray" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <>
      <Toast />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} />
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
