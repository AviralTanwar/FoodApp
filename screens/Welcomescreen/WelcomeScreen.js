import React from 'react'
import { TouchableOpacity } from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../../assets/mainLogo1.png';
import {colors, hr80} from '../../global/style';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <View style={styles.logoout}>
            <Image
                style={styles.img}
                source={logo}
            />
        </View>
        <View style={hr80}/>
        <Text>Healthy Food - Healthy Life</Text>
        <View style={hr80}/>
        <View style={styles.btnout}>
            <TouchableOpacity onPress={() => {navigation.navigate('Signup')}}>
                <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        


    },
    title : {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 100,
        fontWeight: '200',
    },
    logoout: {
        width: '80%',
        height: '30%',
        alognItems: 'center',
        marginBottom: 50,
    },
    img : {
        height: '100%',
        width: '100%',
    },
    btnout: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        width: 100,
        textAlign: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '300',
        padding: 10,
        paddingHorizontal: 10,
        color: 'white',
    }
})

export default WelcomeScreen