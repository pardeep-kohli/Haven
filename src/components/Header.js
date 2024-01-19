import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../assets/themes/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS, SIZES } from "../assets/themes/theme";

export default function Header({ cart, navigation, cartCount }) {
  const iconSize = 30;
  return (
    <View style={styles.parent}>
      <View
        style={{
          position: "absolute",
          right: 10,
          top: 0,
          backgroundColor: colors.darkGrey,
          height: 20,
          width: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Text
          style={{
            fontFamily: "Bold",
            fontSize: SIZES.h4 - 4,
            color: "white",
          }}
        >
          {cartCount}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        {/* <Ionicons name="ios-menu" size={30} color={colors.accent} /> */}
        <Image
          source={require("../assets/images/header_images/ham.png")}
          style={{ height: iconSize, width: iconSize }}
        />
      </TouchableOpacity>
      <View>
        {/* <Image
          style={{marginLeft:10, height: hp(4), width: hp(4), tintColor: colors.white }}
          source={require("../images/bagclub_logo.png")}
        /> */}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={cart}
          style={[styles.touchableStyle, { marginRight: 15 }]}
        >
          <Image
            source={require("../assets/images/header_images/search.png")}
            style={{ height: iconSize, width: iconSize }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={cart} style={styles.touchableStyle}>
          <Image
            source={require("../assets/images/header_images/notification.png")}
            style={{ height: iconSize, width: iconSize }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#fafafa",
    // height:80,
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  touchableStyle: {
    borderWidth: 1,
    borderColor: colors.accent,
    padding: 2,
    borderRadius: 5,
  },
});
