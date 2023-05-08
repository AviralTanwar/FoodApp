import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

const Card = ({data}) => {

    console.log(data);
    let quantity = Number(data.foodQuantity);
    let price = Number(data.data.foodPrice);
  return (
      <TouchableOpacity>
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: data.data.foodImageUrl}}/>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{data.data.foodName}</Text>
                <View style={{marginTop: 20, flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 12, color: "#777"}}>Quantity: {data.foodQuantity} </Text>
                    <Text style={{fontSize: 12, color: "#000", fontWeight: 500, marginRight: 20}}>Total: {quantity*price}</Text>
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