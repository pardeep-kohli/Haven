import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import color from "../../theme/color";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export default function Gothrough2() {
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
          source={require("../../images/splashscreen/goThrough3.png")}
        />
      </View>
      <View style={{ alignSelf: "center", marginTop: 50, width: hp(30) }}>
        <Text style={styles.text}>Swift & Safe Delivery</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.DescriptionText}>
          Enjoy hassle-free and prompt delivery of your favorite fashion items.
          My Bag Club ensures your orders reach you swiftly and securely.
        </Text>
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
    height: hp(27),
    width: hp(45),
    marginTop: hp(5),
  },
  text: {
    color: color.violet,
    fontFamily: "Bold",
    fontSize: 20,

    textAlign: "center",
  },
  DescriptionText: {
    textAlign: "center",
    fontSize: 20,
    // paddingHorizontal: 10,
    marginTop: 20,
    fontFamily: "Regular",
    height: 500,
    width: "100%",
    // backgroundColor:'red',
  },
});
