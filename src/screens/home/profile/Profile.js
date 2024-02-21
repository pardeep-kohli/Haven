import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../assets/themes/colors";
export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <Text style={{fontSize:16,color:"black",fontFamily:'Bold'}}>Profile ...</Text>
      </View>
    </SafeAreaView>
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
