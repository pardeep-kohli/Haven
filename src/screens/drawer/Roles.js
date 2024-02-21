import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/themes/colors";
import UserCard from "../../components/cards/UserCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import Input from "../../components/Input";

const iconSize = wp(6);


export default function Users({ navigation }) {
  const [roles, setRoles] = useState([
    { role: "admin", id: 1 },
    { role: "user", id: 2 },
    { role: "manager", id: 3 },
  ]);
  const [visible, isVisible] = useState(false);
  const SmallButton = ({ buttonColor, icon }) => {
    return (
      <TouchableOpacity
        style={{
          height: wp(6),
          width: wp(6),
          backgroundColor: buttonColor,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}
      >
        <Feather name={icon} color={colors.white} size={wp(3)} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={{ fontFamily: "SemiBold", fontSize: wp(4) }}>
              Manage Roles
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              // elevation: 5,
              margin: 2,
              backgroundColor: colors.white,
              marginTop: 20,
              // borderWidth:1,
              elevation: 3,
            }}
          >
            <View
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingVertical: 20,
              }}
            >
              <View style={{ paddingHorizontal: 10 }}>
                <Input placeholder={"search..."} />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                backgroundColor: colors.light_grey,
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  textTransform: "uppercase",
                  color: colors.black,
                }}
              >
                Roles
              </Text>
              <Text
                style={{
                  fontFamily: "Medium",
                  textTransform: "uppercase",
                  color: colors.black,
                }}
              >
                Actions
              </Text>
            </View>
            <FlatList
              data={roles}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={{ paddingTop: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.roleText}>Admin</Text>
                    <View>
                      <View style={styles.permissionContainer}>
                        <SmallButton icon={"eye"} buttonColor={colors.orange} />
                        <SmallButton icon={"delete"} buttonColor={"red"} />
                        {/* <SmallButton icon={"eye"} buttonColor={colors.orange}/> */}
                      </View>
                    </View>
                  </View>

                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  permissionContainer: {
    // padding: 5,
    // backgroundColor: colors.accent,
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: "row",
  },
  permissionText: {
    color: colors.white,
    fontFamily: "Medium",
  },
  roleText: {
    fontFamily: "SemiBold",
    marginLeft: wp(5),
  },
});
