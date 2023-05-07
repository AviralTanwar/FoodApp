import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { titles, btn1, hr80 } from "../global/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

const UserProfile = ({ navigation }) => {
  const [namefocus, setnamelfocus] = useState(false);
  const [Emailfocus, setEmailfocus] = useState(false);
  const [phonefocus, setphonefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [showcpassword, setshowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);
  const [userData, setUserData] = useState();

  const getUser = async () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        console.log("user not found");
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("Welcomepage");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  console.log(userData);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profile_container}>
        <Image
          source={require("../assets/user_dummy.png")}
          style={styles.img}
        />
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          <AntDesign
            name="user"
            size={24}
            color={namefocus ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            defaultValue={userData?.fullname}
            onFocus={() => {
              setnamelfocus(true);
              setEmailfocus(false);
              setphonefocus(false);
              setPasswordfocus(false);
              setshowpassword(false);
              setcPasswordfocus(false);
            }}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          <MaterialCommunityIcons
            name="email"
            size={24}
            color={Emailfocus ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            defaultValue={userData?.email}
            onFocus={() => {
              setnamelfocus(true);
              setEmailfocus(false);
              setphonefocus(false);
              setPasswordfocus(false);
              setshowpassword(false);
              setcPasswordfocus(false);
            }}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputout}>
          {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
          <Feather
            name="smartphone"
            size={24}
            color={phonefocus ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            defaultValue={userData?.phone}
            onFocus={() => {
              setnamelfocus(true);
              setEmailfocus(false);
              setphonefocus(false);
              setPasswordfocus(false);
              setshowpassword(false);
              setcPasswordfocus(false);
            }}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <TouchableOpacity
          style={{ ...btn1, ...styles.logout }}
          onPress={() => handleSubmit()}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    fontWeight: 600,
  },
  profile_container: {
    width: "100%",
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
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
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  logout: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
});
