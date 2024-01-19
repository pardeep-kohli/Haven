import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
export default function ({ navigation }) {
  return (
    <View>
     <Header navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({});
