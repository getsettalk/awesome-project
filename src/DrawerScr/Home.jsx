import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ButtomTab from '../BottomScr/ButtomTab'

const Home = () => {
  return (
    <View style={style.container}>
      <ButtomTab />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d4f56'
  }
})
export default Home