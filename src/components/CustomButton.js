import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../assets/themes/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function CustomButton({ buttonPress, buttonLabel }) {
  return (
    <TouchableOpacity style={styles.buttonLayout} onPress={buttonPress}>
      <Text style={styles.labelStyle}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  labelStyle: {
    color: colors.tint,
    fontFamily: "Bold",
    fontSize: wp(4),
    textTransform:'uppercase'
  },
  buttonLayout: {
    backgroundColor: colors.accent,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10,
    borderRadius:4
  },
});
