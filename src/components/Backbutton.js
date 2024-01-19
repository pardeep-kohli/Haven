import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
export default function Backbutton({ title,backpress }) {
  return (
    <View
      style={{
        backgroundColor: colors.accent,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 20,
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
        <StatusBar style="light" backgroundColor={colors.accent} />
      <TouchableOpacity style={{ flex: 1 }} onPress={backpress}>
        <Ionicons
          name="ios-chevron-back-outline"
          size={24}
          color={colors.tint}
        />
      </TouchableOpacity>
      <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontFamily:"Bold",fontSize:wp(4.2),color:colors.tint,textDecorationLine:'underline',textDecorationColor:colors.tint}}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
