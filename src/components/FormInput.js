import { View, Text, StyleSheet, TextInput, Animated } from "react-native";
import React, { useState } from "react";
import { colors } from "../assets/themes/colors";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function FormInput({
  label,
  iconName,
  error,
  password,
  compulsory,
  inputIcon,
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
              : colors.tertiary,
          },
        ]}
      >
        <View style={{ paddingHorizontal: 5, justifyContent: "center" }}>
          
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
              color: colors.secondary,
            },
          ]}
          secureTextEntry={hidePassword}
          {...props}
        />
        {password && (
          <View style={styles.eye_container}>
            <MaterialCommunityIcons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword == false ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={hidePassword == false ? colors.accent : colors.tertiary}
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
    marginBottom: 10,
  },
  label: {
    marginVertical: 5,
    fontSize: hp(2),
    color: colors.tertiary,
  },
  inputContainer: {
    backgroundColor: colors.tint,
    flexDirection: "row",
    borderWidth: 1.5,
    borderRadius: 6,
  },
  input: {
    flex: 1,
    paddingHorizontal: 2,
    fontFamily: "Medium",
    fontSize: 16,
    paddingVertical: 10,
    // paddingLeft: 10,
  },
  error: {
    color: colors.accent,
    fontSize: hp(1.5),
    marginTop: hp(0.5),
  },
  icon_container: {
    borderRightWidth: 1.5,
    borderColor: colors.tertiary,
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
    color: colors.tint,
    marginBottom: 5,
    fontFamily: "Regular",
  },
  star: {
    color: colors.accent,
  },
});
