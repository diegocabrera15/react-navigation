import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Caddys!</Text>
      <Button
        title="Go Detail"
        onPress={() =>
          navigation.navigate("Detail", { caddy: "Caddy", userId: 2 })
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};
HomeScreen.navigationOptions = { 
  title: "Home Screen",
};

const DetailScreen = ({ navigation }) => {
  const caddy = navigation.getParam("caddy", "default value");
  return (
    <View style={styles.container}>
      <Text>Sandrica {caddy}</Text>
      <Button title="Back" onPress={() => navigation.setParams({title: 'User 2'})} />
      <StatusBar style="auto" />
    </View>
  );
};
DetailScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("title", "Cargando"),
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },{ 
      initialRouteName: "Home",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fec'
        },
        headerTintColor: '#555',
        // headerTitleStyle: {
        //   fontWeight: '900'
        // }
      }
    }
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
