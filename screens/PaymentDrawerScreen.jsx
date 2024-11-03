import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "../services/styles";
import PageHeader from "../components/PageHeader";

const PaymentDrawerScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
     <PageHeader label="All Dishes" />
      <Text>PaymentDrawerScreen</Text>
    </SafeAreaView>
  );
};

export default PaymentDrawerScreen;
