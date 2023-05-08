import React, { useState } from "react";
import { titles, btn1, hr80 } from "../../global/style";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import { auth } from "../../firebase";

const data = [
  { label: "ANDHRA PRADESH", value: "ANDHRA PRADESH" },
  { label: "ARUNACHAL PRADESH", value: "ARUNACHAL PRADESH" },
  { label: "Assam", value: "Assam" },
  { label: "Bihar", value: "Bihar" },
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Goa", value: "Goa" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Haryana", value: "Haryana" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Jharkhand", value: "Jharkhand" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Kerala", value: "Kerala" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Manipur", value: "Manipur" },
  { label: "Meghalaya", value: "Meghalaya" },
  { label: "Mizoram", value: "Mizoram" },
  { label: "Nagaland", value: "Nagaland" },
  { label: "Odisha", value: "Odisha" },
  { label: "Punjab", value: "Punjab" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Sikkim", value: "Sikkim" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Telangana", value: "Telangana" },
  { label: "Tripura", value: "Tripura" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "West Bengal", value: "West Bengal" },
  
];

const AddressScreen = ({ navigation }) => {
  const [fullname, setfullname] = useState(false);
  const [Emailfocus, setEmailfocus] = useState(false);
  const [houseno, sethouseno] = useState(false);
  const [floor, setfloor] = useState(false);
  const [tower, settower] = useState(false);
  const [landmark, setlandmark] = useState(false);
  const [pincode, setpincode] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [details, setDetails] = useState({
    fullname: "",
    house_no: "",
    floor: "",
    tower: "",
    landmark: "",
    pincode: Number,
    state: "",
  });

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "#0ac1d1" }]}>
          Enter State
        </Text>
      );
    }
    return null;
  };

  const handleSubmit = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        updateDoc(userRef, details).then(() => {
          navigation.navigate("home");
        });
      } else {
        console.log("user not found");
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head1}>Address</Text>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          <AntDesign
            name="user"
            size={24}
            color={fullname ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            onFocus={() => {
              setfullname(true);
              sethouseno(false);
              setfloor(false);
              setlandmark(false);
              settower(false);
              setpincode(false);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, fullname: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          <MaterialIcons
            name="house"
            size={24}
            color={houseno ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="House Number"
            onFocus={() => {
              setfullname(false);
              sethouseno(true);
              setfloor(false);
              settower(false);
              setlandmark(false);
              setpincode(false);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, house_no: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
          <MaterialCommunityIcons
            name="stairs"
            size={24}
            color={floor ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Floor"
            onFocus={() => {
              setfullname(false);
              sethouseno(false);
              setfloor(true);
              settower(false);
              setlandmark(false);
              setpincode(false);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, floor: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
          <FontAwesome
            name="building"
            size={24}
            color={tower ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Tower/Block"
            onFocus={() => {
              setfullname(false);
              sethouseno(false);
              setfloor(false);
              settower(true);
              setlandmark(false);
              setpincode(false);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, tower: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
          <FontAwesome5
            name="landmark"
            size={24}
            color={landmark ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Nearby Landmark (Optional)"
            onFocus={() => {
              setfullname(false);
              sethouseno(false);
              setfloor(false);
              settower(false);
              setlandmark(true);
              setpincode(false);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, landmark: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {/* <Feather name="smartphone" size={24} color={pincode?'#0ac1d1':'black'} /> */}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={6}
            placeholder="Pincode"
            onFocus={() => {
              setfullname(false);
              sethouseno(false);
              setfloor(false);
              settower(false);
              setlandmark(false);
              setpincode(true);
            }}
            onChangeText={(text) => {
              setDetails({ ...details, pincode: text });
            }}
          />
        </View>
        <View style={styles.inputout}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "#0ac1d1" }]}
            placeholderStyle={styles.input}
            selectedTextStyle={styles.input}
            inputSearchStyle={styles.input}
            //   iconStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={350}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select State" : ""}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setDetails({ ...details, state: item.value });
              setIsFocus(false);
            }}
          />
        </View>

        <Text style={styles.or}> Or</Text>
        <View style={hr80}></View>
        <Text>
          Mark it on a map?
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate("mapScreen");
            }}
          >
            {" "}
            Use Maps
          </Text>
        </Text>
        <TouchableOpacity
          style={{ ...btn1, marginTop: 20 }}
          onPress={() => handleSubmit()}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 60,
    // justifyContent: 'center',
  },
  head1: {
    fontSize: titles.title1,
    color: "#0ac1d1",
    textAlign: "center",
    marginVertical: 15,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 10,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
    // color: 'grey',
  },
  inputs: {
    fontSize: 18,
    marginLeft: 10,
    width: "97%",
    color: "grey",
    flexDirection: "row",
  },
  or: {
    color: "#0ac1d1",
    marginVertical: 10,
    fontWeight: "bold",
  },

  dropdown: {
    borderColor: "white",
    fontSize: 18,
    marginLeft: 0,
    marginRight: 0,
    width: "80%",
    // color: 'grey',
  },
  label: {
    position: "absolute",
    // flexDirection: 'row',
    backgroundColor: "white",
    color: "grey",
    left: 0,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 18,
  },
  signup: {
    color: "grey",
  },
});

export default AddressScreen;
