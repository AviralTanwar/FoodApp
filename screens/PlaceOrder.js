import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from "react-native";


const PlaceOrder = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image source={require("../assets/check.png")} style={{width: 250, height: 250, marginLeft: "auto", marginRight: "auto", marginTop: 40}}/>
            <Text style={{marginTop: 30, marginLeft: "auto", marginRight: "auto", fontSize: 20, fontWeight: 500}}>Your order has been placed</Text>
            <TouchableOpacity style={{width: 110, height: 45, backgroundColor: "#0ac1d1", marginLeft: "auto", marginRight: "auto", marginTop: 60, justifyContent: "center", alignItems: "center"}} onPress={() => {navigation.navigate("home")}}>
                <Text style={{color: "#fff", fontWeight: 500}}>Explore More</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlaceOrder;

const styles = StyleSheet.create({
    container : {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    }
})