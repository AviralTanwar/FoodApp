import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Card from "../components/Card";
import { doc, getDoc } from "firebase/firestore"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";

const Cart = ({navigation}) => {

  const [user,setUser] = useState();
  const [data,setData] = useState([]);

  const getData = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "userCart", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) { 
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) { 
          setUser(userSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("user not found");
      }
    });
  }

  useEffect(() => {
    getData();
  },[])

  console.log(user);
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
        {
          data?.cart?.map((d,i) => {
            return(
              <Card data={d} key={i}/>
            )
          })
        }
        <View style={{width: "90%", height: 120, borderRadius: 20, borderColor: "#eee", borderWidth: 1, marginLeft: "auto", marginRight: "auto", padding: 20}}>
            <Text style={{fontWeight: 500, marginBottom: 10}}>Address:</Text>
            <Text style={{width: 200}}>
                {user?.tower}, {user?.house_no}, {user?.floor} Floor, {user?.landmark}, {user?.state} - {user?.pincode}
            </Text>
        </View>
        <View style={{flexDirection: "row", width: "85%", marginLeft: "auto", marginRight: "auto", marginTop: 20}}>
            <TextInput placeholder="Enter Coupon Code" style={{flexGrow: 1, backgroundColor: "#fff", shadowColor: "#000", shadowOffset: {height: 2, width: 2}, shadowRadius: 5, shadowOpacity: 0.2, padding: 15}}/>
            <TouchableOpacity>
                <Text style={{backgroundColor: "#0ac1d1", shadowColor: "#000",color: "#fff", shadowOffset: {height: 5, width: 5}, shadowRadius: 10, shadowOpacity: 0.2, paddingTop: 15, paddingBottom: 15, paddingLeft: 20, paddingRight: 20}}>Apply</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate("placedOrder")}} style={{width: "100%", height: 70, position: "absolute", bottom: 0, left: 0, backgroundColor: "#0ac1d1", alignItems: "center", justifyContent: "center"}}>
          <View style={{width: "100%", height: 70, position: "absolute", bottom: 0, left: 0, backgroundColor: "#0ac1d1", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 18, fontWeight: 500, color: "#fff"}}>Order Now</Text>
          </View>
        </TouchableOpacity>
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
