import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../../components/Header";
import InformationCard from "../../../components/cards/InformationCard";
import { colors } from "../../../assets/themes/colors";
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import DuePayment from "../../../components/cards/DuePayment";
const data = [
  {
    col1: "Row 1 Col 1",
    col2: "Row 1 Col 2",
    col3: "Row 1 Col 3",
    col4: "Row 1 Col 4",
  },
  {
    col1: "Row 2 Col 1",
    col2: "Row 2 Col 2",
    col3: "Row 2 Col 3",
    col4: "Row 2 Col 4",
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
      }}
    >
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <View
          style={{
            width: 3,
            backgroundColor: colors.accent,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 5,
            fontFamily: "SemiBold",
            fontSize: hp(1.8),
          }}
        >
          Due Payments
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {/* Render Table Header */}
          <View style={[styles.row, styles.header]}>
            <View style={styles.column}>
              <Text style={styles.headText}>Title</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Client Name</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Due Date</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headText}>Action</Text>
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
              <TouchableOpacity activeOpacity={0.6} style={styles.column}>
                <View
                  style={{
                    height: hp(3.2),
                    width: hp(3.2),
                    backgroundColor: colors.orange,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="eyeo" size={18} color={colors.white} />
                </View>
                {/* <Text style={styles.resultData}>{rowData.col4}</Text> */}
                <View></View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
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
            elevation: 3,
          }}
        ></View>
        <DataTable data={data} />
        <View style={{ height: 20 }} />
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
  },
  resultData: {
    fontFamily: "Regular",
  },
});
