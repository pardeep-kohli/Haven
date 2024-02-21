import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../assets/themes/colors";
import Input from "../../../components/Input";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Comment() {
  const CommentCard = () => {
    return (
      <View style={{ flexDirection: "row",padding:10}}>
        <Image
          source={require("../../../assets/images/dummy_users/user1.png")}
          style={{ height: hp(6), width: hp(6), borderRadius: hp(6) / 2 }}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontFamily: "SemiBold", color: colors.accent }}>
            Client isn't ready
          </Text>
          <Text style={{ fontFamily: "SemiBold", color: colors.black }}>
            Dec 25, 2024
          </Text>
          <Text style={{ fontFamily: "SemiBold", color: colors.grey }}>
            By Mohito
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            borderRadius: 10,
            elevation: 5,
            backgroundColor: colors.white,
            margin: 5,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 0.5,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                width: 5,
                height: 40,
                backgroundColor: colors.accent,
                borderBottomRightRadius: 4,
                borderTopRightRadius: 4,
                marginRight: 20,
              }}
            />
            <Text style={{ fontFamily: "SemiBold" }}>Comments</Text>
          </View>
          <View style={{ padding: 10, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Input />
            </View>

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: colors.accent,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <Feather name="send" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
