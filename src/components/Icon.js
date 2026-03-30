import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

const Icon = (props) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF" />
    </View>
    <Text style={styles.iconText}>{props.iconText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 60,
    height: 60,
  },

  iconContainer: {
    backgroundColor: "#384053",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  iconText: {
    height: 20,
    fontWeight: "600",
  },
});

export default Icon;
