import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Caddys!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sandrica</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
},{initialRouteName: 'Detail'});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
