import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../assets/themes/colors";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function MessageCard({image,name,time,message,onPress}) {
  return (
    <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
      style={{
        flexDirection: "row",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colors.l_grey,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          width: wp(15),
          height: wp(15),
          backgroundColor: colors.accent_10,
          borderRadius: wp(15) / 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={{ width: wp(15), height: wp(15) }} source={image} />
      </View>
      <View style={{ justifyContent: "center", marginLeft: 20 }}>
        <Text
          style={{
            fontFamily: "SemiBold",
            color: colors.black,
            fontSize: wp(3.5),
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            color: colors.black,
            fontSize: wp(3.2),
          }}
        >
          {message}
        </Text>
      </View>
      <Text
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          fontFamily: "Medium",
          color: colors.accent,
          fontSize: wp(3),
        }}
      >
        {time}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
