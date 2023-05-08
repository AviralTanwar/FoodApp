import { ScrollView,StyleSheet, Text, View,Image, Pressable, TextInput} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import style, { navbtn, navbtnout,colors,veg,nonveg,btn2,hr80,incdecbtn,incdecinput,indecout} from '../global/style';
import { TouchableOpacity } from "react-native";
import axios from "axios";

const ProductPage = ({navigation,route}) => {

  const [calories,setCalories] = useState();

  const data=route.params;
  if(route.params === undefined){
    navigation.navigate('home')
  }

  const [quantity,setQuantity]=useState('1');
  const [addonquantity,setAddonquantity]=useState('0');
  const addtocart=()=>{
    // console.log('add to cart')
    const data1= {data,addonquantity : addonquantity,Foodquantity:quantity}
    console.log('data1',data1)

  }

  const increaseQuantity=()=>{
    setQuantity((parseInt(quantity)+1).toString())
  }

  const decreaseQuantity=()=>{
    if(parseInt(quantity)>1){
      setQuantity((parseInt(quantity)-1).toString())
    }
  }

  const increaseAddonQuantity=()=>{
    setAddonquantity((parseInt(addonquantity)+1).toString())
  }

  const decreaseAddonQuantity=()=>{
    if(parseInt(addonquantity)>0){
      setAddonquantity((parseInt(addonquantity)-1).toString())
    }
  }

  const getCalories = async() => {
    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      params: {q: 'chicken'},
      headers: {
        'X-RapidAPI-Key': '98a03cd174msh1b09c57a0b56b4ap1f1ca1jsn2aafc79c94aa',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      }
    };
    try{
      const response = await axios.request(options);
      let cal = response.data.hits[1].recipe.calories;
      setCalories(cal.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {

    // axios({
    //   method: 'GET',
    //   url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    //   params: {q: 'chicken'},
    //   headers: {
    //     'X-RapidAPI-Key': '6d171c145amsh2d2a140928a8068p1c6e91jsn7ddef21437a4',
    //     'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    //   }
    // }).then(response => {
    //   console.log(response.data);
    // })
    getCalories();
  },[])



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container1}>
            <View style={styles.s1}>
                <Image source={{
                  uri: data.foodImageUrl
                }}  style={styles.cardimgin}
                ></Image>
            </View>
        </View>
        <View style={styles.s2}>
            <View style={styles.s2in}>
                <Text style={styles.head1}>{data.foodName}</Text>
                <Text style={styles.head2}>₹{data.foodPrice}/-</Text>
            </View>
          <View style={styles.s3}>
            <Text style={styles.head3}>About Food</Text> 
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.head4}>{data.foodDescription}</Text> 
              <Text style={{fontSize: 14, color: "#fff"}}>Calories: {calories}</Text>
            </View>
            <View style={styles.s3in}>
              {data.foodType==='veg'? <Text style={veg}></Text> : <Text style={ nonveg}></Text>}
              <Text style={styles.head5}>{data.foodType}</Text>
            </View>

            </View>
            
            <View style={styles.container2}>
                <Text style={styles.txt1}>Location</Text>
                <Text style={styles.txt2}>{data.restaurantName}</Text>
                <View style={styles.container2in}>
                  <Text style={styles.txt3}>{data.restaurantAddressBuilding}</Text>
                  <View style={styles.dash}></View>
                  <Text style={styles.txt3}>{data.restaurantAddressStreet}</Text>
                  <View style={styles.dash}></View>
                  <Text style={styles.txt3}>{data.restaurantAddressCity}</Text>
                </View>
            </View>

            {data.foodAddonPrice !="" && 
              <View style={styles.container}>
                <View style={hr80}></View>
                <Text style={styles.txt5}> Add Extra</Text>
                <View style={styles.c3in}>
                <Text style={styles.text4}>{data.foodAddon}</Text>
                <Text style={styles.text4}>₹{data.foodAddonPrice}/-</Text>
                </View>
                <View style={{...indecout, marginLeft:'auto', marginRight:'auto'}}>
                  <Text style={incdecbtn} onPress={()=>increaseAddonQuantity()}>+</Text>
                  <TextInput value={addonquantity} style={incdecinput}></TextInput>
                  <Text style={incdecbtn} onPress={()=> decreaseAddonQuantity()}>-</Text>
                </View>
              </View>
            }

            <View style={styles.container3}>
                <View style={hr80}></View>
                <Text style={styles.txt5}>Food Quantity</Text>
                <View style={indecout}>
                  <Text style={incdecbtn} onPress={()=>increaseQuantity()}>+</Text>
                  <TextInput value={quantity} style={incdecinput}></TextInput>
                  <Text style={incdecbtn} onPress={()=> decreaseQuantity()}>-</Text>
                </View>
                <View style={hr80}></View>
            </View>
        </View>

        <View style={styles.container4}>
          <View style={styles.c4in}>
            <Text style={styles.txt2}>Total Price</Text>
            {data.foodAddonPrice !="" ? <Text style={styles.txt6}>
                 ₹{'000'}
                 </Text>:
                 <Text style={styles.txt6}>
                  ₹{(
                    parent(data.foodPrice)*parseInt(quantity)
                  ).toString()}/-
                 </Text>
}
          </View>
          <View style={hr80}></View>
        </View>

        <View style={styles.btncont}>
            <TouchableOpacity style={btn2} onPress={() => addtocart()}>
              <Text style={styles.btntxt}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btn2}>
                <Text style={styles.btntxt}> Buy Now</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    width: "100%",
    height: "100%",
  },
  container1:{
    flex:1,
    backgroundColor:'#fff',
  },
  scrollContainer: {
    width: "100%",
  },

  cardimgin:{
    width:'100%',
    height:'100%',
  },
  s1:{
    width:"100%",
    height:300,
    backgroundColor:'#fff',
  },
  s2in:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
  },
  head1:{
    fontSize:30,
    fontWeight:'500',
    color: colors.text1,
    width: 220,
    marginRight:10,
  },
  head2:{
    fontSize:50,
    fontWeight:'200',
    color: colors.text1,
  },
  s3:{
    backgroundColor: colors.text1,
    padding:20,
    borderRadius:20,
  },
  head3:{
    fontSize:30,
    fontWeight:'200',
    color:colors.col1,
  },
  head4:{
    marginVertical:10,
    fontSize:20,
    fontWeight:'400',
    color: colors.col1,
  },
  s3in:{
    backgroundColor:colors.col1,
    padding:10,
    borderRadius:10,
    width:130,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  head5:{
    color:colors.text3,
    fontSize:20,
    fontWeight:'200',
    marginLeft:10,
  },
  btncont:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    flexDirection:'row',
  },
  btntxt:{
    backgroundColor:colors.text1,
    color:colors.col1,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    borderRadius:10,
    width:'90%',
    textAlign:'center',
  },
  container2:{
    width:'90%',
    backgroundColor: colors.col1,
    padding:20,
    borderRadius:20,
    alignSelf:'center',
    marginVertical:10,
    elevation:10,
    alignItems:'center',
  },
  txt1:{
    color:colors.text1,
    fontSize:20,
    fontWeight:'200',
  },
  txt2:{
    color:colors.text3,
    fontSize:30,
    fontWeight:'200',
    marginVertical:10,
  },
  container2in:{
    flexDirection:'row',
    alignItems:'center',
  },
  txt3:{
    color:colors.text1,
    fontSize:18,
    width:'30%',
    textAlign:'center',
  },
  dash:{
    width:1,
    height:20,
    backgroundColor:colors.text1,
    marginHorizontal:10,
  },
  container3:{
    width:"90%",
    alignSelf:'center',
    alignItems:'center',
  },
  txt5:{
    color:colors.text1,
    fontSize:18,
    // width:'30%',
    textAlign:'center',
  },
  c3in:{
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
  },
  text4:{
    color:colors.text3,
    fontSize:20,
    marginHorizontal:10,
  },
  c4in:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
  },

  container4:{
    width:'90%',
    alignSelf:'center',
    alignItems:'center',
  },

  c4in:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'100%',
    alignItems:'center',
  },
  txt6:{
    color:colors.text1,
    fontSize:35,
    // width:'30%',
    textAlign:'center',
  }
});
