import React, { useEffect, useState } from "react";
import { titles, btn1, hr80 } from "../../global/style";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth } from "../../firebase";
import { db } from "../../firebase";

const SignupScreen = ({ navigation }) => {
  const [namefocus, setnamelfocus] = useState(false);
  const [Emailfocus, setEmailfocus] = useState(false);
  const [phonefocus, setphonefocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [showcpassword, setshowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);

  //taking form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [customError, setCustomError] = useState("");
  const [successmsg, setSuccessmsg] = useState("");

  console.log(customError);

  // const auth = getAuth();

  const handleSignup = async () => {
    const FormData = {
      email: email,
      password: password,
      // cpassword: cpassword,
      phone: phone,
      name: name,
      // address: address
    };
    if (name === "") {
      setCustomError("Enter the name !!");
      return;
    } else if (password != cpassword) {
      // alert("PASSWORD does not match!!!");
      setCustomError("PASSWORD does not match!!!");
      return;
    } else if (phone.length != 10) {
      setCustomError("Phone Number should be at least 10 digits!!");
      return;
    }
    try {
      // navigation.navigate("add");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          userCredential.user.displayName = name;
          userCredential.user.phoneNumber = phone;
          setDoc(doc(db, "users", userCredential.user.uid), {
            name,
            email,
            phone,
          });
          console.log(user);

          navigation.navigate("add");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } catch (error) {
      console.log("SignUp error SYSTEM Error", error.message);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head1}>Sign Up</Text>
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
            autoCapitalize="none"
            onFocus={() => {
              setnamelfocus(false);
              setEmailfocus(true);
              setphonefocus(false);
              setPasswordfocus(false);
              setshowpassword(false);
              setcPasswordfocus(false);
            }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputout}>
          <Feather
            name="smartphone"
            size={24}
            color={phonefocus ? "#0ac1d1" : "black"}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={10}
            placeholder="Phone Number"
            onFocus={() => {
              setnamelfocus(false);
              setEmailfocus(false);
              setphonefocus(true);
              setPasswordfocus(false);
              setshowpassword(false);
              setcPasswordfocus(false);
            }}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={styles.inputout}>
          <Entypo
            name="lock"
            size={24}
            color={passwordfocus ? "#0ac1d1" : "black"}
          />
          {/* <Entypo name="lock" size={24} color={passwordfocus?'black':'#5e5e5e'} /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={() => {
              setnamelfocus(false);
              setEmailfocus(false);
              setPasswordfocus(true);
              setcPasswordfocus(false);
              setphonefocus(false);
            }}
            secureTextEntry={showpassword ? false : true}
            onChangeText={(text) => setPassword(text)}
          />
          <Feather
            name={showpassword ? "eye" : "eye-off"}
            size={24}
            color="black"
            // color={passwordfocus?'black':'#5e5e5e'}
            onPress={() => setshowpassword(!showpassword)}
          />
        </View>
        <View style={styles.inputout}>
          <Entypo
            name="lock"
            size={24}
            color={cpasswordfocus ? "#0ac1d1" : "black"}
          />
          {/* <Entypo name="lock" size={24} color={cpasswordfocus?'black':'#5e5e5e'} /> */}
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onFocus={() => {
              setnamelfocus(false);
              setEmailfocus(false);
              setcPasswordfocus(true);
              setPasswordfocus(false);
              setphonefocus(false);
            }}
            onChangeText={(text) => setcPassword(text)}
            secureTextEntry={showcpassword ? false : true}
          />
          <Feather
            name={showcpassword ? "eye" : "eye-off"}
            size={24}
            color="black" // color={cpasswordfocus?'black':'#5e5e5e'}
            onPress={() => setshowcpassword(!showcpassword)}
          />
        </View>
        <TouchableOpacity style={btn1} onPress={() => handleSignup()}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>

        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign-in with</Text>

        <View style={styles.gf}>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="facebook-square" size={24} color="#426782" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={hr80}></View>
        <Text>
          Already have an account?
          <Text
            style={styles.signup}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            {" "}
            Sign In{" "}
          </Text>
        </Text>
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
    marginTop: 0,
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
  },
  forgot: {
    color: "grey",
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: "#0ac1d1",
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    color: "grey",
    fontWeight: 600,
    fontSize: 20,
    marginVertical: 10,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 15,
  },
  signup: {
    color: "grey",
    // paddingBottom:60,
    // marginBottom: 900,
  },
});

export default SignupScreen;
