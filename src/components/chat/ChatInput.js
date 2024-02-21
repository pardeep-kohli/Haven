import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../assets/themes/colors";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function ChatInput({
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
  const imgSize = hp(4);
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.inputView}>
      <View style={[styles.inputContainer]}>
        <TextInput
          multiline
          // numberOfLines={1}
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
          {...props}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image
              source={require("../../assets/images/chat/file.png")}
              style={{ height: imgSize, width: imgSize }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/chat/send.png")}
              style={{ height: imgSize, width: imgSize }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    // marginBottom: 12,
    backgroundColor:colors.white,
    borderTopWidth:1,
    borderColor:colors.l_grey
  },
  label: {
    marginVertical: 5,
    fontSize: hp(2),
    color: colors.grey,
  },
  inputContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingVertical: 10,

  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Medium",
    fontSize: 16,
    paddingVertical: 10,
    minHeight: 40,
    maxHeight: 80,
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
    fontSize: 15,
  },
  star: {
    color: colors.accent,
  },
});
