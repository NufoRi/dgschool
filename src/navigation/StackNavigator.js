import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const stackNavigatorStyle = {
  headerStyle: {
    backgroundColor: "#384053",
  },
  headerTintColor: "white",
  headerShown: false,
};

const MainStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const AboutStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

export { MainStackNavigator, AboutStackNavigator };
