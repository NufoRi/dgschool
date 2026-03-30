import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const About = ({ navigation }) => (
  <View>
    <Text>Welcome to About Screen</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);

const styles = StyleSheet.create({});

export default About;
