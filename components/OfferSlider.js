import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import {colors} from '../global/style'

// const carousedata ={
//   {
//     id : 1
//     image: '../../assets/pizza.jpg'
//   }
//   {
//     id : 2
//     image: '../../assets/salad.jpg'
//   }
//   {
//     id : 3
//     image: '../../assets/food-coupons.jpg'
//   }
// }

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
          <Swiper autoplay={true} autoplayTimeout={2} dotColor={colors.text2} activeDotColor={colors.text1}>
            <View style={styles.slide}>
              <Image source={require( '../assets/pizza.jpg' )} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require( '../assets/salad.jpg' )} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require( '../assets/food-coupons.jpg' )} style={styles.image} />
            </View>
          </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  slide: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 20,
  }

})