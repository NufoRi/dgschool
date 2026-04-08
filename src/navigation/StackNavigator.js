import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import About from "../screens/About";
import Ios from "../screens/Ios";
import Android from "../screens/Android";
import Single from "../screens/Single";

const Stack = createStackNavigator();

const stackNavigatorStyle = {
  headerStyle: {
    backgroundColor: "#384053",
  },
  headerTintColor: "white",
};

const MainStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Ios" component={Ios} />
    <Stack.Screen name="Android" component={Android} />
    <Stack.Screen name="Single" component={Single} />
  </Stack.Navigator>
);

const AboutStackNavigator = ({ navigation }) => (
  <Stack.Navigator screenOptions={stackNavigatorStyle}>
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

export { MainStackNavigator, AboutStackNavigator };