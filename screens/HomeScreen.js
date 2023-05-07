import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import HomeHeadNav from "../components/HomeHeadNav";
import OfferSlider from "../components/OfferSlider";
import Categories from "../components/Categories";
import Cardslider from "../components/Cardslider";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/style";
import { doc, onSnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const HomeScreen = ({ navigation }) => {
  const [foodData, setFoodData] = useState([]);
  const [vegData, setVegData] = useState([]);
  const [nonVegData, setNonVegData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "FoodData"));
    setFoodData(querySnapshot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setVegData(foodData.filter((item) => item.foodType == "veg"));
  }, [foodData]);

  useEffect(() => {
    setNonVegData(foodData.filter((item) => item.foodType == "non-veg"));
  }, [foodData]);

  console.log(foodData);
  console.log(nonVegData);

  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeHeadNav navigation={navigation} />
      <View style={styles.searchbox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={styles.searchicon}
        />
        <TextInput
          style={styles.input}
          placeholder="search"
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </View>
      {search != "" && (
        <View style={styles.searchresultouter}>
          {/* <Text>You typed something</Text>     */}
          <FlatList
            style={styles.serachresultinner}
            data={foodData}
            renderItem={({ item }) => {
              if (
                item.foodName.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return (
                  <View style={styles.searchresult}>
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text style={styles.searchresulttext}>{item.foodName}</Text>
                  </View>
                );
              }
            }}
          ></FlatList>
        </View>
      )}
      <Categories />
      <OfferSlider />

      <Cardslider
        title={"Today's Special"}
        data={foodData}
        navigation={navigation}
      />
      <Cardslider
        title={"NonVeg Love"}
        data={nonVegData}
        navigation={navigation}
      />
      <Cardslider title={"Veg Hunger"} data={vegData} navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    // alignItems: 'center',
    width: "100%",
    // paddingTop: 40,
  },
  searchbox: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: "center",
    elevation: 20,
    margin: 20,
  },
  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  searchresultouter: {
    width: "100%",
    marginHorizontal: 30,
    height: "100%",
    backgroundColor: colors.col1,
  },
  searchresultinner: {
    width: "100%",
  },
  searchresult: {
    width: "100%",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  searchresluttext: {
    margiinLeft: 10,
    fontSize: 10,
    color: colors.text1,
  },
});
export default HomeScreen;
