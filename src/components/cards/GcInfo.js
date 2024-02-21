import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colors } from "../../assets/themes/colors";
const { width, height } = Dimensions.get("window");
const iconSize = 35;
const iconBox = 45;
export default function GcInfo({
  image,
  bgcolor,
  uppertext,
  lowertext,
  quantity,
}) {
  return (
    <View style={styles.cardStyle}>
     
      <Text
        style={{ fontFamily: "SemiBold", marginTop: 20, color: colors.black }}
      >
        {uppertext}
      </Text>
      {/* <Text
        style={{
          fontFamily: "SemiBold",
          marginBottom: 20,
          color: colors.black,
        }}
      >
        {lowertext}
      </Text> */}
      <Text
        style={{ fontFamily: "Bold", fontSize: hp(2), color: colors.black ,marginVertical:20}}
      >
        {quantity}
      </Text>
      <View
        style={{
          backgroundColor: bgcolor,
          height: iconBox,
          width: iconBox,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: iconBox / 3,
          elevation: 5,
        }}
      >
        <Image source={image} style={{ height: iconSize, width: iconSize }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: width / 2.4,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: colors.white,
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 2,
  },
});
