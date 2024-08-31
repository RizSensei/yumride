import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishrow";
import CartIcon from "../components/cartIcon";
import { StatusBar } from "expo-status-bar";

export default function RestaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();

  return (
    <View>
      <CartIcon/>
      <StatusBar style="light"/>
      <ScrollView>
        <View className="relative">
          <Image
            className="h-72 w-full"
            source={require("../assets/images/demo-image-restaurant.jpg")}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
          <View className="bg-white -mt-12 pt-6 rounded-t-3xl">
            <View className="px-5">
              <Text className="text-3xl font-bold"> {item.name} </Text>
              <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                  <Icon.Star
                    height="12"
                    width="12"
                    stroke={themeColors.bgColor(1)}
                    strokeWidth={2.5}
                  />
                  <Text className="text-sm">
                    <Text className="text-green-700"> {item.rating} </Text>
                    <Text className="text-gray-700">
                      &#40; 4.4K reviews&#41; .
                      <Text className="font-semibold text-gray-700">
                        {item.cuisine}
                      </Text>
                    </Text>
                  </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Icon.MapPin color="gray" width={15} height={15} />
                  <Text className="text-gray-700 text-sm">
                    {" "}
                    Nearby&nbsp;.&nbsp;{item.address.street}{" "}
                  </Text>
                </View>
              </View>
              <Text className="text-gray-500 mt-2"> {item.description} </Text>
            </View>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="p-4 text-2xl font-bold">Menu</Text>
          {/* dishes  */}
          {
            item.menu.map((dish, index) => <DishRow key={index} item={{...dish}}/>)
          }
        </View>
      </ScrollView>
    </View>
  );
}