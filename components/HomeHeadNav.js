import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { colors } from '../global/style';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
        <Fontisto name="nav-icon-list" size={24} color="black" style={styles.myicon} />
        <View style={styles.containerin}>
            <Text style={styles.mytext}> FIT_FOODIE</Text> 
            <Ionicons name="fast-food-outline" size={24} color="black" style={styles.myicon} />
        </View>
            <EvilIcons name="user" size={24} color="black" style={styles.myicon} />
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.col1,
    elevation : 20,
    
  },
  containerin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
})