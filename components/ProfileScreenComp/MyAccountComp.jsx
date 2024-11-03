import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../../theme";

const PageRedirectBtn = ({ redirectTo, IconComponent, label }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate({ redirectTo })}
      style={{
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "gray",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconComponent height={20} width={20} strokeWidth={2} stroke="gray" />
        <Text style={{ marginLeft: 10, color: "gray", fontWeight: "bold" }}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const MyAccountComp = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "gray" }}>
        My Account
      </Text>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <PageRedirectBtn
          redirectTo="Home"
          IconComponent={Icon.FileText}
          label="My Orders"
        />
        <PageRedirectBtn
          redirectTo="Home"
          IconComponent={Icon.Heart}
          label="Favourites"
        />
        <PageRedirectBtn
          redirectTo="Home"
          IconComponent={Icon.Map}
          label="My Address"
        />
        <PageRedirectBtn
          redirectTo="Home"
          IconComponent={Icon.Key}
          label="Change Password"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate({ redirectTo })}
          style={{
            marginTop: 10,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 10,
            // borderWidth: 2,
            // borderColor: "white",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon.LogOut
              height={20}
              width={20}
              strokeWidth={2}
              stroke="white"
            />
            <Text style={{ marginLeft: 10, color: "white", fontWeight: "bold" }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccountComp;
