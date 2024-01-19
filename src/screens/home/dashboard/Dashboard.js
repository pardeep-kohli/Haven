import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "../../../components/Header";
import InformationCard from "../../../components/cards/InformationCard";
import { colors } from "../../../assets/themes/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import DuePayment from "../../../components/cards/DuePayment";

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Text style={styles.heading}>Dashboard</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <InformationCard
            image={require("../../../assets/images/dashboard_icons/client_added.png")}
            bgcolor={colors.blue}
            uppertext={"Total Clients"}
            lowertext={"Added"}
            quantity={1234}
          />
          <InformationCard
            image={require("../../../assets/images/dashboard_icons/client_accepted.png")}
            bgcolor={colors.green}
            uppertext={"Total Clients"}
            lowertext={"Accepted"}
            quantity={1234}
          />
          <InformationCard
            image={require("../../../assets/images/dashboard_icons/client_pending.png")}
            bgcolor={colors.orange}
            uppertext={"Total Clients"}
            lowertext={"Pending"}
            quantity={1234}
          />
          <InformationCard
            image={require("../../../assets/images/dashboard_icons/contract_created.png")}
            bgcolor={colors.pink}
            uppertext={"Total Contract"}
            lowertext={"Created"}
            quantity={1234}
          />
          <InformationCard
            image={require("../../../assets/images/dashboard_icons/contract_due.png")}
            bgcolor={colors.brown}
            uppertext={"Total Contract"}
            lowertext={"Due Date"}
            quantity={1234}
          />
        </View>

        <View
          style={{
            borderRadius: 10,
            // elevation: 5,
            margin: 2,
            backgroundColor: colors.white,
            marginTop: 20,
            // borderWidth:1,
            elevation:3
          }}
        >
          <View
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingVertical: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  height: 30,
                  width: 3,
                  backgroundColor: colors.green,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              />
              <Text
                style={{
                  fontFamily: "SemiBold",
                  fontSize: hp(2),
                  marginLeft: 15,
                }}
              >
                Top Due Payments
              </Text>
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
              backgroundColor:colors.light_grey
            }}
          >
            <Text
              style={{
                fontFamily: "Medium",
                textTransform: "uppercase",
                color: colors.black,
              }}
            >
              Title
            </Text>
            <Text
              style={{
                fontFamily: "Medium",
                textTransform: "uppercase",
                color: colors.black,
              }}
            >
              Client Name
            </Text>
          </View>
          <View style={{paddingTop:10}}> 
          <DuePayment invoice={"#INV00001"} amount={16000} client={"Ricky"} />
          <DuePayment invoice={"#INV00002"} amount={9000} client={"Marena"} />
          <DuePayment invoice={"#INV00003"} amount={17000} client={"Sam"} />
          <DuePayment invoice={"#INV00004"} amount={2500} client={"Monty"} />
          <DuePayment invoice={"#INV00005"} amount={7000} client={"Daniel"} />
          <DuePayment invoice={"#INV00006"} amount={365} client={"Tim"} />
          </View>
        </View>
      <View style={{height:20}}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "SemiBold",
    fontSize: hp(2.2),
    marginVertical: 5,
  },
});
