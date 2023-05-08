import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { colors } from "../global/style";

const HomeHeadNav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {navigation.navigate("cart")}}>
      <Entypo name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.containerin}>
        <Text style={styles.mytext}> FIT_FOODIE</Text>
        <Ionicons
          name="fast-food-outline"
          size={24}
          color="black"
          style={{ ...styles.myicon, marginLeft: 5 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("profile");
        }}
      >
        <EvilIcons name="user" size={40} color="black" style={styles.myicon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeadNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.col1,
    elevation: 20,
  },
  containerin: {
    flexDirection: "row",
    alignItems: "center",
  },
});
