import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="h-full w-full flex flex-col items-center justify-center">
         
        <View className="flex-row justify-center items-center gap-10">
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-xl font-semibold">Login</Text>
          </TouchableOpacity>
          <Text className="font-extrabold text-5xl" style={{color: themeColors.bgColor(1)}}>|</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-xl font-semibold">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  });