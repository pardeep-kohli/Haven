import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../assets/themes/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
export default function Gothrough1() {
  return (
    <View>
      <View style={styles.parent}>
        {/* <View style={styles.RoundedCircle}>
          <Text style={{ fontSize: 20 }}>2</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Skip</Text>
        </View> */}
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/splash1.png")}
        />
      </View>
      <View style={styles.textBox}>
        <View style={{}}>
          <Text style={styles.text}>Welcome To Haven Contracting</Text>
        </View>
        <View style={{}}>
          <Text style={styles.DescriptionText}>
            Transforming Visions into Structures with Precision, Dedication, and
            Expertise. Building Tomorrow, Today.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 30,
  },
  RoundedCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
  },
  image: {
    height: hp(35),
    width: hp(45),
    marginTop: hp(5),
  },
  text: {
    color: colors.white,
    fontFamily: "Bold",
    fontSize: wp(4.5),
    // textAlign: "center",
  },
  DescriptionText: {
    fontSize: wp(4),
    marginTop: hp(2.5),
    fontFamily: "Regular",
    color: colors.white,
  },
  textBox: {
    marginTop: hp(20),
    paddingHorizontal: 15,
  },
});
