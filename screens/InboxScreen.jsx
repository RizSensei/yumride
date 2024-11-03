import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import PageHeader from "../components/PageHeader";

const All = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#F3F4F6",
      paddingHorizontal: 10,
      paddingVertical: 10,
    }}
  >
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        YumBites Friday Offer is Here
      </Text>
      <Text style={{ marginTop: 10 }}>
        Ready for lunch? GEt 8 pieces of 8 fried YumBites Chicken for just 1089!
        Available for today only. Don't miss out.
      </Text>
      <Text style={{ marginTop: 10, color: "gray", fontWeight: "bold" }}>
        Wednesday, 30th October, 2024
      </Text>
    </View>
  </View>
);

const General = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const Orders = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const Offers = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

const renderScene = SceneMap({
  first: All,
  second: General,
  third: Orders,
  fourth: Offers,
});

const InboxScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "All" },
    { key: "second", title: "General" },
    { key: "third", title: "Orders" },
    { key: "fourth", title: "Offers" },
  ]);

  return (
    <>
      {/* <SafeAreaView> */}
        <PageHeader label="Inbox Messages" backOption={true} />

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      {/* </SafeAreaView> */}
    </>
  );
};

export default InboxScreen;
