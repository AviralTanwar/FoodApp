import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const Card = () => {
  return (
      <TouchableOpacity>
        <View style={styles.card}>
            <Image style={styles.img}/>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>Krishna's Special Butter Chicken</Text>
                <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 12, color: "#777"}}>Quantity: 2 </Text>
                    <Text style={{fontSize: 12, color: "#000", fontWeight: 500, marginRight: 20}}>Total: ₹400</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: {height: 1, width: 1 },
        shadowRadius: 5,
        margin: 20,
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    cardContainer: {
        flexGrow: 1,
        flexDirection: "column",
        margin: 10
    },
    cardTitle: {
        fontSize: 16,
        width: 220,
        fontWeight: 500,
    }
    
})