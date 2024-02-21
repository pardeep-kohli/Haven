import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../assets/themes/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import MessageCard from "../../../components/cards/MessageCard";
// Component definition
const FavComp = ({ name, img }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={{ marginRight: wp(2.2) }}>
      <View
        style={{
          borderRadius: wp(20) / 2,
          borderWidth: 2,
          borderColor: colors.accent,
        }}
      >
        <Image
          source={img}
          style={{ height: wp(20), width: wp(20), borderRadius: wp(20) / 2 }}
        />
      </View>
      <Text
        style={{ alignSelf: "center", fontFamily: "SemiBold", marginTop: 5 }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default function Messages({ navigation }) {
  const [favorite, setFavorite] = useState([
    {
      id: "1",
      name: "Tim",
      img: require("../../../assets/images/dummy_users/user1.png"),
      message: "Hi, How are you?",
      time: "2 days ago",
    },
    {
      id: "2",
      name: "Daniel",
      img: require("../../../assets/images/dummy_users/user2.png"),
      message: "Okay, Have a great day.",
      time: "1 days ago",
    },
    {
      id: "3",
      name: "Mason",
      img: require("../../../assets/images/dummy_users/user3.png"),
      message: "Hello",
      time: "1 minute ago",
    },
    {
      id: "4",
      name: "Mareno",
      img: require("../../../assets/images/dummy_users/user4.png"),
      message: "waiting!!",
      time: "2 months ago",
    },
    {
      id: "5",
      name: "Joe",
      img: require("../../../assets/images/dummy_users/user5.png"),
      message: "umhh!!",
      time: "3 days ago",
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Header navigation={navigation} />
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.heading}>Favourites</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={favorite}
          renderItem={({ item }) => (
            <View>
              <FavComp name={item.name} img={item.img} />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          marginTop: 20,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: colors.l_grey,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            width: wp(15),
            height: wp(15),
            backgroundColor: colors.accent_10,
            borderRadius: wp(15) / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="bookmark" size={24} color={colors.accent} />
        </View>
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "SemiBold",
              color: colors.black,
              fontSize: wp(3.5),
            }}
          >
            Saved Messages
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              color: colors.black,
              fontSize: wp(3.2),
            }}
          >
            Saved Messages Secretly
          </Text>
        </View>
        <Text
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            fontFamily: "Medium",
            color: colors.accent,
            fontSize: wp(3),
          }}
        >
          You
        </Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        // horizontal
        data={favorite}
        renderItem={({ item }) => (
          <View>
            <MessageCard
              onPress={() => navigation.navigate("ChatScreen")}
              message={item.message}
              image={item.img}
              name={item.name}
              time={item.time}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Bold",
    fontSize: wp(3.5),
    marginVertical: 15,
  },
});
