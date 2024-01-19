import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
export default function Messenger({navigation}) {
  return (
    <View>
      <Header navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({})