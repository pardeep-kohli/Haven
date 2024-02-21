import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/themes/colors";
import UserCard from "../../components/cards/UserCard";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import Input from "../../components/Input";
import SmallInput from "../../components/SmallInput";
import CustomButton from "../../components/CustomButton";
import CustomDropdown from "../../components/CustomDropdown";
const iconSize = wp(6);
const roleOptions = [
  "Admin",
  "User",
  "Manager",
  // Add more roles as needed
];

export default function Users({ navigation }) {
  const [visible, isVisible] = useState(false);
  const [activeUserIndex, setActiveUserIndex] = useState(null);

  const closeUserOptions = () => {
    setActiveUserIndex(null);
  };

  const toggleUserOptions = (index) => {
    setActiveUserIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const [selectedRole, setSelectedRole] = useState(null);
  return (
    
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <Header navigation={navigation} />
        <ScrollView onScroll={()=>closeUserOptions()}>
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
                Manage Users
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    padding: 10,
                    backgroundColor: colors.accent,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                  onPress={() => isVisible(true)}
                >
                  <Image
                    source={require("../../assets/images/dashboard_icons/add.png")}
                    style={{ width: iconSize, height: iconSize }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    padding: 10,
                    backgroundColor: colors.accent,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/images/dashboard_icons/user_log.png")}
                    style={{ width: iconSize, height: iconSize }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={() => closeUserOptions()}>
            <View>
              <UserCard
                userImg={require("../../assets/images/dummy_users/user1.png")}
                role={"Admin"}
                name={"Ajay"}
                email={"ajay@gmailo.com"}
                isOpen={activeUserIndex === 0}
                toggleOptions={() => toggleUserOptions(0)}
              />
              <UserCard
                userImg={require("../../assets/images/dummy_users/user2.png")}
                role={"User"}
                name={"Savannah"}
                email={"savannah@gmail.com"}
                isOpen={activeUserIndex === 1}
                toggleOptions={() => toggleUserOptions(1)}
              />
              <UserCard
                userImg={require("../../assets/images/dummy_users/user3.png")}
                role={"Admin"}
                name={"Ricky"}
                email={"ricky@gmail.com"}
                isOpen={activeUserIndex === 2}
                toggleOptions={() => toggleUserOptions(2)}
              />
              <UserCard
                userImg={require("../../assets/images/dummy_users/user4.png")}
                role={"Custom"}
                name={"Mark"}
                email={"mark@gmail.com"}
                isOpen={activeUserIndex === 3}
                toggleOptions={() => toggleUserOptions(3)}
              />
              <UserCard
                userImg={require("../../assets/images/dummy_users/user5.png")}
                role={"User"}
                name={"Daniel"}
                email={"daniel@gmail.com"}
                isOpen={activeUserIndex === 4}
                toggleOptions={() => toggleUserOptions(4)}
                />
            </View>
                </TouchableWithoutFeedback>

          </View>
        </ScrollView>
        <Modal visible={visible} animationType="fade" transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#00000023",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                padding: 20,
                width: "90%",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontFamily: "SemiBold" }}>Create User</Text>
                <TouchableOpacity onPress={() => isVisible(false)}>
                  <Entypo name={"cross"} color={colors.black} size={24} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderColor: colors.l_grey,
                  marginVertical: 10,
                  paddingVertical: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <SmallInput label={"Name"} placeholder={"Enter Name"} />
                  <SmallInput label={"Email"} placeholder={"Enter Email"} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <SmallInput
                    label={"Password"}
                    placeholder={"Password"}
                    password
                  />
                  <SmallInput
                    label={"Job Title"}
                    placeholder={"Enter Job Title"}
                  />
                </View>
                {/* <Input label={"Role"} placeholder={"Role of user"} /> */}
                <CustomDropdown label="Select Role" data={roleOptions} />
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                {/* <CustomButton buttonLabel={"Close"}/>
              <CustomButton buttonLabel={"Create"}/> */}
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => isVisible(false)}
                  style={{
                    minWidth: wp(20),
                    borderColor: colors.l_grey,
                    backgroundColor: colors.white,
                    elevation: 5,
                    borderRadius: 10,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "SemiBold",
                      color: colors.black,
                      fontSize: wp(4),
                    }}
                  >
                    Close
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    minWidth: wp(20),
                    backgroundColor: colors.accent,
                    elevation: 5,
                    borderRadius: 10,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "SemiBold",
                      color: colors.white,
                      fontSize: wp(4),
                    }}
                  >
                    Create
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
