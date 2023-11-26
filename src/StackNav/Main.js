import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DrawerNavigator from '../DrawerScr/DrawerNavigator'

const Main = () => {
  return (
    <View style={style.container}>
      <DrawerNavigator />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d4f56'
  }
})
export default Main