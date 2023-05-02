import React, {useState} from 'react'
import {titles, btn1, hr80} from '../../global/style';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {
    const [namefocus, setnamelfocus] = useState(false);
    const [Emailfocus, setEmailfocus] = useState(false);
    const [phonefocus, setphonefocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setshowpassword] = useState(false);
    const [showcpassword, setshowcpassword] = useState(false);
    const [cpasswordfocus, setcPasswordfocus] = useState(false);

    return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.head1}>Sign Up</Text>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            <AntDesign name="user" size={24} color={namefocus?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Full Name"
                onFocus={()=>{
                    setnamelfocus(true);
                    setEmailfocus(false);
                    setphonefocus(false);
                    setPasswordfocus(false);
                    setshowpassword(false);
                    setcPasswordfocus(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            <MaterialCommunityIcons name="email" size={24} color={Emailfocus?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                onFocus={()=>{
                    setnamelfocus(false);
                    setEmailfocus(true);
                    setphonefocus(false);
                    setPasswordfocus(false);
                    setshowpassword(false);
                    setcPasswordfocus(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            <Feather name="smartphone" size={24} color={phonefocus?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                keyboardType= 'numeric'
                maxLength={10}
                placeholder="Phone Number"
                onFocus={()=>{
                    setnamelfocus(false);
                    setEmailfocus(false);
                    setphonefocus(true);
                    setPasswordfocus(false);
                    setshowpassword(false);
                    setcPasswordfocus(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            <Entypo name="lock" size={24} color={passwordfocus?'#0ac1d1':'black'} />
            {/* <Entypo name="lock" size={24} color={passwordfocus?'black':'#5e5e5e'} /> */}
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                onFocus={()=>{
                    setnamelfocus(false);
                    setEmailfocus(false);
                    setPasswordfocus(true);
                    setcPasswordfocus(false);
                    setphonefocus(false);
                }}
                secureTextEntry={showpassword?false:true}
            />
            <Feather 
                name={showpassword?"eye":"eye-off"} 
                size={24} 
                color='black'
                // color={passwordfocus?'black':'#5e5e5e'} 
                onPress={()=>setshowpassword(!showpassword)}
            />
        </View>
        <View style={styles.inputout}>
            <Entypo name="lock" size={24} color={cpasswordfocus?'#0ac1d1':'black'} />
            {/* <Entypo name="lock" size={24} color={cpasswordfocus?'black':'#5e5e5e'} /> */}
            <TextInput 
                style={styles.input} 
                placeholder="Confirm Password"
                onFocus={()=>{
                    setnamelfocus(false);
                    setEmailfocus(false);
                    setcPasswordfocus(true);
                    setPasswordfocus(false)
                    setphonefocus(false);
                }}
                secureTextEntry={showcpassword?false:true}
            />
            <Feather 
                name={showcpassword?"eye":"eye-off"} 
                size={24} 
                color='black' // color={cpasswordfocus?'black':'#5e5e5e'} 
                onPress={()=>setshowcpassword(!showcpassword)}
            />
        </View>
        <TouchableOpacity style={btn1}>
            <Text 
                style={{color: 'white', fontSize: 20, fontWeight: 'bold',}} onPress={() => {navigation.navigate('home')}}>    
                Sign Up
            </Text>
        </TouchableOpacity>

        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign-in with</Text>
    
        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gficon}>
                <AntDesign 
                    name="google" 
                    size={24} 
                    color="#EA4335" 
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.gficon}>
                <AntDesign 
                    name="facebook-square" 
                    size={24} 
                    color="#426782" 
                />
                </View>
            </TouchableOpacity>
        </View>
        <View style={hr80}></View>
        <Text >Already have an account? 
                <Text style={styles.signup} onPress={() => {navigation.navigate('Login')}}> Sign In </Text>
        </Text>

    </View>
                </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 60,
        // justifyContent: 'center',

    },
    head1: {
        fontSize: titles.title1,
        color: '#0ac1d1',
        textAlign: 'center',
        marginVertical: 15,
        marginTop: 0,

    },
    inputout: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10, 
        paddingHorizontal: 10,
        elevation: 10,
    },
    input: {
        fontSize: 18, 
        marginLeft: 10,
        width: '80%',
    },
    forgot : {
        color: 'grey',
        marginTop: 20,
        marginBottom: 10,
    },
    or : {
        color: '#0ac1d1',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    gftxt : {
        color: 'grey',
        fontWeight: 600,
        fontSize: 20, 
        marginVertical: 10,
    },
    gf: {
        flexDirection: 'row',
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 15,
    },
    signup : {
        color: 'grey',
        // paddingBottom:60,
        // marginBottom: 900,
    }
})

export default SignupScreen