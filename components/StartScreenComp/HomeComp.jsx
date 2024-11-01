import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";
import Categories from "../categories";
import FeaturedRow from "../featuredRow";

const HomeComp = () => {
  return (
    <>
      <View className="bg-white flex-row items-center space-x-2 px-5 py-2">
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text
            className="text-gray-600"
            style={{ fontWeight: 500, fontSize: 16 }}
          >
            Hey there!
          </Text>
          <Text
            style={{ fontWeight: 500, fontSize: 28, color: themeColors.text }}
          >
            Find your food now
          </Text>
        </View>
      </View>
      {/* search bar  */}
      <View className="bg-white flex-row items-center space-x-2 px-2 py-2">
        <View className="w-full flex-row flex-1 items-center p-3 rounded-full border border-gray-500">
          <View className="w-full flex-row items-center flex-1">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder="Search Foods" className="ml-2" />
          </View>
          <View className="flex-row items-center pl-2 border-l-2 border-gray-300">
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text className="text-gray-600">Swoyambhu</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* main  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            height: 150,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={require("../../assets/images/banner.jpg")}
            className="w-full h-full object-scale-down"
          />
          <View style={{ position: "absolute", top: "20%", left: 15 }}>
            <View style={{ maxWidth: 200 }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 24 }}
              >
                Free Delivery for Veg Kabab
              </Text>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 12 }}
              >
                Upto 3 times a day
              </Text>
              <TouchableOpacity
                // onPress={() => navigation.navigate("Cart")}
                style={{
                  backgroundColor: themeColors.bgColor(1),
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 50,
                  marginTop: 5,
                  alignSelf: "flex-start",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* categories  */}
        <Categories />

        {/* featured  */}
        <View className="mt-5 px-5">
          <FeaturedRow />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeComp;
