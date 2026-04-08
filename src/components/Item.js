import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Item = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Single", { item })}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: `${item.image}` }}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
  },

  img: {
    width: 100,
    height: "90%",
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 5,
  },

  textContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "70%",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  category: {
    fontSize: 12,
    color: "#22D4FF",
  },

  desc: {
    fontStyle: "italic",
  },

  price: {
    fontWeight: "bold",
    backgroundColor: "#384053",
    marginTop: 5,
    color: "white",
    borderRadius: 100,
    paddingHorizontal: 5,
    width: 45,
  },
});

export default Item;