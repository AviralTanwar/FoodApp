import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../global/style'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'


function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal>
        <View style={styles.box}>
          <MaterialCommunityIcons name="food-apple-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.mytext}>Starters</Text>
        </View>

        <View style={styles.box}>
          <MaterialIcons name="dinner-dining" size={24} color="black" style={styles.icon} />
          <Text style={styles.mytext}>Dinner</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Breakfast</Text>
        </View>

        <View style={styles.box}>
          <MaterialIcons name="cake" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Desserts</Text>
        </View>

        {/* <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burger</Text>
        </View> */}

      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
        paddingBottom: 0,
        flex: 10,
        backgroundColor: colors.col1,
        alignItems: 'center',
        width: '100%',
        height: 500,
        elevation: 10,
        borderRadius: 10,
        maxHeight: 150,
    },
    head: {
      color: colors.text2,
      fontSize: 25,
      fontWeight: '300',
      margin: 10,
      alignSelf: 'center',
      paddingBottom: 5,
      borderBottomColor: colors.text2,
      borderBottomWidth: 1,

    },

    box: {
      backgroundColor: colors.col1,
      elevation: 20,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      height: 45,
      width: 100,
      justifyContent: 'center',
      flexDirection: 'row',
    },

    icon: {
      marginRight: 8,
    },

})