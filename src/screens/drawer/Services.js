import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import DuePayment from "../../components/cards/DuePayment";
import { colors } from "../../assets/themes/colors";
import UserCard from "../../components/cards/UserCard";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import Input from "../../components/Input";
import SmallInput from "../../components/SmallInput";
import CustomButton from "../../components/CustomButton";
import GcInfo from "../../components/cards/GcInfo";
import CustomDropdown from "../../components/CustomDropdown";
import CompactInput from "../../components/CompactInput";
import UploadImage from "../../components/UploadImage";
const iconSize = wp(6);

const data = [
  {
    col1: "Row 1 Col 1",
    col2: "Row 1 Col 2",
    col3: "Row 1 Col 3",
    col4: "Row 1 Col 4",
    col5: "Row 1 Col 5",
   
  },
  {
    col1: "Row 2 Col 1",
    col2: "Row 2 Col 2",
    col3: "Row 2 Col 3",
    col4: "Row 2 Col 4",
    col5: "Row 2 Col 5",
   
  },
];
const DataTable = ({ data }) => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: colors.white,
        paddingVertical: 20,
        borderWidth: 2,
        borderColor: colors.light_grey,
        marginTop:20
      }}
    >

      <View style={{ paddingHorizontal: 10 }}>
                  <CompactInput placeholder={"search..."} />
                </View>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {/* Render Table Header */}
          <View style={[styles.row, styles.header]}>
            <View style={styles.column}>
              <Text style={styles.headText}>Image</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Services</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Price</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Type</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Description</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Actions</Text>
            </View>
            
          </View>

          {/* Render Table Data */}
          {data.map((rowData, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col1}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col2}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col3}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col4}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col5}</Text>
              </View>
              {/* <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col6}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col7}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col8}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.resultData}>{rowData.col9}</Text>
              </View> */}

              <View  style={styles.column}>
                {/* <TouchableOpacity
                  style={{
                    height: hp(3.2),
                    width: hp(3.2),
                    backgroundColor: colors.orange,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight:10
                  }}
                >
                  <AntDesign name="eyeo" size={18} color={colors.white} />
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={{
                    height: hp(3.2),
                    width: hp(3.2),
                    backgroundColor: colors.blue,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight:10
                  }}
                >
                  <AntDesign name="edit" size={18} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: hp(3.2),
                    width: hp(3.2),
                    backgroundColor: colors.pink,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="delete" size={18} color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default function Services({ navigation }) {
  const [visible, isVisible] = useState(false);
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
              Manage Services
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>isVisible(true)}
                style={{
                  padding: 10,
                  backgroundColor: colors.accent,
                  borderRadius: 10,
                  marginRight: 10,
                }}
                // onPress={() => isVisible(true)}
              >
                <Image
                  source={require("../../assets/images/dashboard_icons/add.png")}
                  style={{ width: iconSize, height: iconSize }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <GcInfo
              image={require("../../assets/images/gc_list/total.png")}
              bgcolor={colors.blue}
              uppertext={"Total Clients"}
              lowertext={"Added"}
              quantity={9587}
            />
            <GcInfo
              image={require("../../assets/images/gc_list/fav.png")}
              bgcolor={colors.green}
              uppertext={"Accepted Clients"}
              lowertext={"Added"}
              quantity={7300}
            />
            <GcInfo
              image={require("../../assets/images/gc_list/fav.png")}
              bgcolor={colors.orange}
              uppertext={"Pending Clients"}
              lowertext={"Added"}
              quantity={2087}
            />
            <GcInfo
              image={require("../../assets/images/gc_list/fav.png")}
              bgcolor={colors.pink}
              uppertext={"Decline Clients"}
              lowertext={"Added"}
              quantity={200}
            />
             <DataTable data={data} />
          
          </View>
        </View>
      </ScrollView>
      <Modal visible={visible} animationType="fade" transparent={true}>
          <SafeAreaView
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
                <Text style={{ fontFamily: "SemiBold" }}>Create Services</Text>
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
                  <SmallInput label={"Product Name"} placeholder={"Product Name"} />
                  <SmallInput label={"Price"} placeholder={"Project Price"} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <SmallInput
                    label={"Phone"}
                    placeholder={"Enter Number"}
                  
                  />
                  <SmallInput
                    label={"Fax"}
                    placeholder={"Enter Fax"}
                  /> */}

                  <CustomDropdown label={"Type"}/>

                </View>
                  <UploadImage/>
                <CompactInput label={"Description"} placeholder={"Enter Description for service"} multiline={true} numberOfLines={5} textAlignVertical={'top'}/>
                <CompactInput label={"Chastity Gentry"} placeholder={"Enter Chastity Gentry"} />
                
                {/* <Input label={"Role"} placeholder={"Role of user"} /> */}
                {/* <CustomDropdown label="Select Role" data={roleOptions} /> */}
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
          </SafeAreaView>
        </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "SemiBold",
    fontSize: hp(2.2),
    marginVertical: 5,
  },
  textContainer: {
    flexDirection: "row",
  },
  headText: {
    fontFamily: "Medium",
  },
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.l_grey,
  },
  header: {
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 2,
    borderColor: colors.l_grey,
  },
  column: {
    padding: 10,
    minWidth: 200,
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    flexDirection:'row'
  },
  resultData: {
    fontFamily: "Regular",
  },
});
