import { View, Text, StyleSheet, TextInput, Animated } from "react-native";
import React, { useState } from "react";
import { colors } from "../assets/themes/colors";
import { FontAwesome5, MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function SmallInput({
  label,
  iconName,
  error,
  password,
  compulsory,
  inputIcon,
  material,
  fontawesome,
  onFocus = () => {},
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.inputView}>
      <View style={{ flexDirection: "row" }}>
        {label && <Text style={styles.label_style}>{label}</Text>}

        <View>{compulsory && <Text style={styles.star}>* </Text>}</View>
      </View>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? colors.accent
              : isFocused
              ? colors.accent
              : colors.grey,
          },
        ]}
      >
        <View style={{ justifyContent: "center" }}>
          {fontawesome && (
            <FontAwesome5
              name={inputIcon}
              size={18}
              color={
                error
                  ? colors.accent
                  : isFocused
                  ? colors.accent
                  : colors.grey
              }
            />
          )}
          {material && (
            <MaterialCommunityIcons
              name={inputIcon}
              size={20}
              color={
                error
                  ? colors.accent
                  : isFocused
                  ? colors.accent
                  : colors.grey
              }
            />
          )}
        </View>
        <TextInput
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          autoCorrect={false}
          style={[
            styles.input,
            {
              color: colors.accent,
            },
          ]}
          secureTextEntry={hidePassword}
          placeholderTextColor={colors.l_grey}
          {...props}
        />
        {password && (
          <View style={styles.eye_container}>
            <Ionicons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword == false ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={hidePassword == false ? colors.accent : colors.grey}
            />
          </View>
        )}
      </Animated.View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    marginBottom: 12,
    width:'48%'
  },
  label: {
    marginVertical: 5,
    fontSize: hp(2),
    color: colors.grey,
  },
  inputContainer: {
    backgroundColor: colors.tint,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    elevation:2
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    fontFamily: "Medium",
    fontSize: 14,
    paddingVertical: 10,

  },
  error: {
    color: colors.accent,
    fontSize: hp(1.5),
    marginTop: hp(0.5),
  },
  icon_container: {
    borderRightWidth: 1.5,
    borderColor: colors.grey,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  eye_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label_style: {
    color: colors.grey,
    marginBottom: 5,
    fontFamily: "SemiBold",
    fontSize:14

  },
  star: {
    color: colors.accent,
  },
});
