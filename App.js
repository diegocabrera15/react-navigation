import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Caddys!</Text>
      <Button title="Go Detail" onPress={() => navigation.navigate("Detail", {caddy: 'Caddy', userId: 2})} />
      <StatusBar style="auto" />
    </View>
  );
};

const DetailScreen = ({ navigation }) => {
  const caddy = navigation.getParam('caddy', 'default value')
  return (
    <View style={styles.container}>
      <Text>Sandrica {caddy}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
    </View>
  );
};
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
