import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import Card from "../components/Card";
import { memoryLruGarbageCollector } from "firebase/firestore";

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => {navigation.navigate("home")}}>
                <Ionicons name="arrow-back" size={26} color="black" style={styles.btn_back} />
            </TouchableOpacity>
            <Text style={styles.heading}>Your Cart</Text>
        </View>
        <View style={styles.itemHeadContainer}>
            <View style={styles.itemLeft}></View>
            <Text style={{transform: [{translateY: 6}]}}>Items Added</Text>
            <View style={styles.itemRight}></View>
        </View>
        <Card />
        <Card />
        <View style={{width: "90%", height: 120, borderRadius: 20, borderColor: "#eee", borderWidth: 1, marginLeft: "auto", marginRight: "auto", padding: 20}}>
            <Text style={{fontWeight: 500, marginBottom: 10}}>Address:</Text>
            <Text style={{width: 200}}>
                Hi-bird, I003, Niho Scottish Gardens, Ahinsa Khand 2, Ghaziabad - 201309
            </Text>
        </View>
        <View style={{flexDirection: "row", width: "85%", marginLeft: "auto", marginRight: "auto", marginTop: 20}}>
            <TextInput placeholder="Enter Coupon Code" style={{flexGrow: 1, backgroundColor: "#fff", shadowColor: "#000", shadowOffset: {height: 2, width: 2}, shadowRadius: 5, shadowOpacity: 0.2, padding: 15}}/>
            <TouchableOpacity>
                <Text style={{backgroundColor: "#0ac1d1", shadowColor: "#000",color: "#fff", shadowOffset: {height: 5, width: 5}, shadowRadius: 10, shadowOpacity: 0.2, paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20}}>Apply</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: "100%", height: 70, position: "absolute", bottom: 0, left: 0, backgroundColor: "#0ac1d1", alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 18, fontWeight: 500, color: "#fff"}}>Order Now</Text>
        </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  },
  header: {
    margin: 10, 
    marginTop: 20,
    flexDirection: "row"
  },
  heading: {
    fontSize: 22,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
  },
  btn_back: {
    position: "absolute",
    top: 0,
    marginLeft: 10,
  }, 
  itemHeadContainer: {
    // backgroundColor: "red"
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  itemLeft:{
    borderBottomWidth: 1,
    borderBottomColor: "thistle",
    flexGrow: 1,
    marginRight: 10
  },
  itemRight :{
    borderBottomWidth: 1,
    borderBottomColor: "thistle",
    flexGrow: 1,
    marginLeft: 10,
  }
});
