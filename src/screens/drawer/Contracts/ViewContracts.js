// import "@react-native-community/viewpager";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../../../assets/themes/colors";
// import { COLORS } from "../../../assets/themes/theme";
import Attachment from "./Attachment";
import Comment from "./Comment";
import General from "./General";
import { Feather } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { COLORS } from "../../../assets/themes/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Backbutton from "../../../components/Backbutton";
const SmallButton = ({ buttonColor, icon }) => {
  return (
    <TouchableOpacity
      style={{
        height: wp(8),
        width: wp(8),
        backgroundColor: buttonColor,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <Feather name={icon} color={colors.white} size={wp(4)} />
    </TouchableOpacity>
  );
};
export default function ViewContracts() {
  const layout = useWindowDimensions();
  const [color, changeColor] = useState("red");
  const [refreshing, setRefreshing] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "General" },
    { key: "second", title: "Attachments" },
    { key: "third", title: "Comments" },
  ]);

  const FirstRoute = () => <General />;
  const SecondRoute = () => <Attachment />;
  const ThirdRoute = () => <Comment />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={[styles.tabBar]}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <View>
              <TouchableOpacity
                style={[
                  styles.tabItem,
                  {
                    backgroundColor: index == i ? colors.accent : "transparent",
                  },
                ]}
                onPress={() => setIndex(i)}
              >
                <Text
                  style={{
                    fontFamily: "SemiBold",
                    // borderBottomColor: "#c4d8ff",
                    fontSize: 12,
                    color: index == i ? colors.white : colors.accent,
                  }}
                >
                  {route.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  const RenderData = (props) => {
    // const inputRange = props.navigationState.routes.map((x, i) => i);
    console.log("what is index: ", index);
    return (
      <View style={{padding:10}}>
        {index == 0 && (
          <View style={styles.data}>
            <Text style={styles.titleStyle}>General</Text>
            <View style={{ flexDirection: "row" }}>
              <SmallButton icon={"download"} buttonColor={colors.accent} />
              <SmallButton icon={"eye"} buttonColor={colors.accent} />
            </View>
          </View>
        )}
        {index == 1 && (
          <View style={styles.data}>
            <Text style={styles.titleStyle}>Attachment</Text>
            <View style={{ flexDirection: "row" }}>
              <SmallButton icon={"download"} buttonColor={colors.accent} />
              <SmallButton icon={"eye"} buttonColor={colors.accent} />
            </View>
          </View>
        )}
        {index == 2 && (
          <View style={styles.data}>
            <Text style={styles.titleStyle}>Comments</Text>
            <View style={{ flexDirection: "row" }}>
              <SmallButton icon={"download"} buttonColor={colors.accent} />
              <SmallButton icon={"eye"} buttonColor={colors.accent} />
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Backbutton/>
      <RenderData />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main_box: {
    flex: 1,
  },
  subhead_text: {
    fontSize: 14,
    color: colors.black,
    textTransform: "uppercase",
    marginBottom: 30,
    fontFamily: "Bold",
  },
  book_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tabItem: {
    alignItems: "center",
    paddingVertical: 12,
    marginHorizontal: 10,
    borderRadius: 15,
    minWidth: "33%",
  },
  data: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  titleStyle:{
    fontFamily:'Bold',
    color:colors.black,
    fontSize:wp(4)
  }
});
