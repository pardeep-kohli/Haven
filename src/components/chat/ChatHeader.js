import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colors } from "../../assets/themes/colors";

export default function ChatHeader({ backPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={backPress}>
          <AntDesign name="arrowleft" size={24} color={colors.accent} />
        </TouchableOpacity>
        <Image
          style={{ height: hp(6), width: hp(6), marginHorizontal: 10 }}
          source={require("../../assets/images/dummy_users/user1.png")}
        />
        <Text style={{ fontFamily: "Bold", color: colors.black }}>Mareno</Text>
      </View>
      <View style={styles.rightContainer}>
        <AntDesign name="star" size={24} color={colors.orange} />
        <AntDesign name="infocirlce" size={24} color={colors.accent} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: colors.l_grey,
    backgroundColor:colors.white
  },
});
