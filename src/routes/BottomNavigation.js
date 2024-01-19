import React from "react";
import { Image, Text, View } from "react-native";
import { colors } from "../assets/themes/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import D_Stack from "../screens/home/dashboard/D_Stack";
import P_Stack from "../screens/home/profile/P_Stack";
import M_Stack from "../screens/home/message/M_Stack";

const ClientTab = createBottomTabNavigator();
const iconSize = 25;
const TabLabel = ({ label, isFocused, image }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      // justifyContent: "flex-end",
      backgroundColor: isFocused ? colors.accent : "transparent",
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 10,
      width: "80%",
      justifyContent: "center",
      marginBottom: 5,
    }}
  >
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        // padding: 3,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.white,
      }}
    >
      {/* <MaterialCommunityIcons
      name="view-dashboard"
      size={20}
      color={isFocused ? colors.white : colors.darkGrey}
      style={{ marginRight: 5 }}
    /> */}
      <Image source={image} style={{ height: iconSize, width: iconSize }} />
    </View>
    <Text
      style={{
        fontFamily: isFocused ? "Bold" : "Bold",
        fontSize: heightPercentageToDP(1.4),
        color: isFocused ? colors.white : colors.white,
        marginLeft:5

      }}
    >
      {label}
    </Text>
  </View>
);

export default function BottomNavigation() {
  const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName?.includes("ViewOrderDetail") ||
      routeName?.includes("ThankYouScreen")
    ) {
      return "none";
    }
    return "flex";
  };

  return (
    <ClientTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.secondary,
        tabBarInactiveBackgroundColor: colors.secondary,
        // tabBarStyle: { position: 'absolute',zIndex:99,backgroundColor:'red',borderRadius:100,margin:100},
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "red",
          },
          null,
        ],
        tabBarIcon: () => null, // Explicitly set tabBarIcon to null to remove default icons
      }}
    >
      <ClientTab.Screen
        name="D_Stack"
        component={D_Stack}
        options={({ route }) => ({
          tabBarStyle: { display: getRouteName(route) },
          tabBarLabel: ({ focused }) => (
            <TabLabel
              label="Dashboard"
              isFocused={focused}
              image={require("../assets/images/bottom_icons/home.png")}
            />
          ),
        })}
      />
      <ClientTab.Screen
        name="M_Stack"
        component={M_Stack}
        options={({ route }) => ({
          tabBarStyle: { display: getRouteName(route) },
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Messanger" isFocused={focused} image={require("../assets/images/bottom_icons/message.png")}/>
          ),
        })}
      />
      <ClientTab.Screen
        name="P_Stack"
        component={P_Stack}
        options={({ route }) => ({
          tabBarStyle: { display: getRouteName(route) },
          tabBarLabel: ({ focused }) => (
            <TabLabel label="Profile" isFocused={focused} image={require("../assets/images/bottom_icons/profile.png")}/>
          ),
        })}
      />
    </ClientTab.Navigator>
  );
}
