import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors } from "../../assets/themes/colors";
const iconSize = wp(4);
export default function UserCard({
  role,
  userImg,
  name,
  email,
  isOpen,
  toggleOptions = () => {},
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.firstRow}>
        {isOpen && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
              onPress={() => console.log("View pressed")}
            >
              <Feather name={"eye"} color={colors.black} size={iconSize} />
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
              onPress={() => console.log("Edit pressed")}
            >
              <Feather name={"edit"} color={colors.black} size={iconSize} />
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
              onPress={() => console.log("Delete pressed")}
            >
              <Feather name={"delete"} color={colors.black} size={iconSize} />
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
              }}
              onPress={() => console.log("Reset pressed")}
            >
              <Feather name={"key"} color={colors.black} size={iconSize} />
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity
          onPress={() => toggleOptions()}
          style={styles.featherContainer}
        >
          <Feather name={"more-vertical"} color={colors.black} size={24} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image source={userImg} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.username}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    padding: 40,
    marginBottom: 10,
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    position: "absolute",
    right: 20,
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    top: 0,
    zIndex: 1,
  },
  buttonText: {
    fontFamily: "Medium",
    fontSize: 16,
    color: colors.black,
    marginHorizontal: 10,
    // marginBottom: 5,
  },
  featherContainer: {
    marginLeft: 10,
  },
  username: {
    fontFamily: "Bold",
    color: colors.accent,
    fontSize: wp(4),
  },
  email: {
    fontSize: wp(3.5),
    fontFamily: "Medium",
    marginVertical: 10,
  },
});
