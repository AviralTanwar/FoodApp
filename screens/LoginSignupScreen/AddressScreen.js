import React, {useState} from 'react'
import {titles, btn1, hr80} from '../../global/style';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'ANDHRA PRADESH', value: '1' },
    { label: 'ARUNACHAL PRADESH', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

const AddressScreen = ({navigation}) => {
    const [fullname, setfullname] = useState(false);
    const [Emailfocus, setEmailfocus]= useState(false);
    const [houseno, sethouseno] = useState(false);
    const [floor, setfloor] = useState(false);
    const [tower, settower] = useState(false);
    const [landmark, setlandmark] = useState(false);
    const [pincode, setpincode] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: '#0ac1d1' }]}>
            Enter State
          </Text>
        );
      }
      return null;
    };

  return (
    <ScrollView>
        <View style={styles.container}>
        <Text style={styles.head1}>Address</Text>
    <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Enter Full Name"
                onFocus={()=>{
                    setfullname(true);
                    sethouseno(false);
                    setfloor(false);
                    setlandmark(false);
                    settower(false);
                    setpincode(false);
                }}
            
            />
        </View>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}            
            <MaterialIcons name="house" size={24} color={houseno?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="House Number"
                onFocus={()=>{
                    setfullname(false);
                    sethouseno(true);
                    setfloor(false);
                    settower(false);
                    setlandmark(false);
                    setpincode(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
            <MaterialCommunityIcons name="stairs" size={24} color={floor?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Floor"
                onFocus={()=>{
                    setfullname(false);
                    sethouseno(false);
                    setfloor(true);
                    settower(false);
                    setlandmark(false);
                    setpincode(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
            <FontAwesome name="building" size={24} color={tower?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Tower/Block"
                onFocus={()=>{
                    setfullname(false);
                    sethouseno(false);
                    setfloor(false);
                    settower(true);
                    setlandmark(false);
                    setpincode(false);
                }}
            />
        </View>
        <View style={styles.inputout}>
            {/* <AntDesign name="user" size={24} color={emailfocus?'black':'#5e5e5e'} /> */}
            {/* <AntDesign name="user" size={24} color={fullname?'#0ac1d1':'black'} /> */}
            <FontAwesome5 name="landmark" size={24} color={landmark?'#0ac1d1':'black'} />
            <TextInput 
                style={styles.input} 
                placeholder="Nearby Landmark (Optional)"
                onFocus={()=>{
                    setfullname(false);
                    sethouseno(false);
                    setfloor(false);
                    settower(false);
                    setlandmark(true);
                    setpincode(false);
                }}
            />
        </View>
                <View style={styles.inputout}>
            {/* <Feather name="smartphone" size={24} color={pincode?'#0ac1d1':'black'} /> */}
            <TextInput 
                style={styles.input} 
                keyboardType= 'numeric'
                maxLength={6}
                placeholder="Pincode"
                onFocus={()=>{
                    setfullname(false);
                    sethouseno(false);
                    setfloor(false);
                    settower(false);
                    setlandmark(false);
                    setpincode(true);
                }}
            />
        </View>
        <View style={styles.inputout}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#0ac1d1' }]}
          placeholderStyle={styles.input}
          selectedTextStyle={styles.input}
          inputSearchStyle={styles.input}
        //   iconStyle={styles.inputSearchStyle}
          data={data}
          search
          maxHeight={350}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select State' : ''}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

        <Text style={styles.or}> Or</Text>
                <View style={hr80}></View>
        <Text >Mark it on a map?
                <Text style={styles.signup} onPress={() => {navigation.navigate('Signup')}}> Use Maps</Text>
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
        marginTop:60,
        // justifyContent: 'center',

    },
    head1: {
        fontSize: titles.title1,
        color: '#0ac1d1',
        textAlign: 'center',
        marginVertical: 15,


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
        // color: 'grey',
    },
    inputs: {
        fontSize: 18, 
        marginLeft: 10,
        width: '97%',
        color: 'grey',
        flexDirection: 'row',
    },
    or : {
        color: '#0ac1d1',
        marginVertical: 10,
        fontWeight: 'bold'
    },

    dropdown: {
        borderColor: 'white',
        fontSize: 18, 
        marginLeft: 0,
        marginRight: 0,
        width: '80%',
        // color: 'grey',
    },
    label: {
      position: 'absolute',
        // flexDirection: 'row',
        backgroundColor: 'white',
        color: 'grey',
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
    signup : {
        color: 'grey',
    }
})


export default AddressScreen
