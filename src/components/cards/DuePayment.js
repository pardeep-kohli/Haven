import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../assets/themes/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width } = Dimensions.get("window");
export default function DuePayment({ invoice, amount, client }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        paddingVertical: 10,
        alignItems: "center",
        borderBottomColor: colors.l_grey,
        borderBottomWidth: 1,
        marginVertical: 5,
      }}
    >
      <View style={{ width: width / 1.8 }}>
        <Text
          style={{
            fontFamily: "Medium",
            color: colors.black,
            fontSize: hp(1.5),
          }}
        >
          {invoice}
        </Text>
        <Text
          style={{
            fontFamily: "Medium",
            color: colors.black,
            fontSize: hp(1.5),
          }}
        >
          Due Amount: ${amount}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "SemiBold",
          color: colors.black,
          fontSize: hp(1.5),
        }}
      >
        {client}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
