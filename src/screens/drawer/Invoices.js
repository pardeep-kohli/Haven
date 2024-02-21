import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
export default function ({ navigation }) {
  return (
    <View style={{flex:1}}>
     <Header navigation={navigation}/>
     <View style={styles.container}>
        <Text style={{fontSize:16,color:"black",fontFamily:'Bold'}}>Invoices...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white"
  }
})
