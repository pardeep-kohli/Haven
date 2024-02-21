import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import { Icon, Avatar, Button } from "react-native-elements";
// import BottomNavigation from "./BottomNavigation";
import { colors } from "../assets/themes/colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "../screens/home/dashboard/Dashboard";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { updateUserImage } from "../redux/user/authSlice";
import { clearUserDataFromAsyncStorage } from "../redux/user/authSlice";
import * as qs from "qs";
import BottomNavigation from "./BottomNavigation";
// import BaseURL from "../constants/baseUrl";
import axios from "axios";
import Contracts from "../screens/drawer/Contracts";
import GcList from "../screens/drawer/GcList";
import Invoices from "../screens/drawer/Invoices";
import Messenger from "../screens/drawer/Messenger";
import Roles from "../screens/drawer/Roles";
import Services from "../screens/drawer/Services";
import SystemSetting from "../screens/drawer/SystemSetting";
import Users from "../screens/drawer/Users";
const labelSize = hp(1.5)
const iconSize=hp(1.8)
function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [image, setImage] = useState(null);

  const reduxUser = useSelector((state) => state.auth);
  // console.log("redux====", reduxUser);
  const logAsyncData = async () => {
    try {
      // Retrieve the data from AsyncStorage
      const asyncData = await AsyncStorage.getItem("userData");
      if (asyncData) {
        const userDataFromAsyncStorage = JSON.parse(asyncData);
        console.log("Data from AsyncStorage:", userDataFromAsyncStorage);
      } else {
        console.log("No data found in AsyncStorage.");
      }
    } catch (error) {
      console.log("Error retrieving data from AsyncStorage:", error);
    }
  };

  const handleLogout = () => {
    dispatch(clearUserDataFromAsyncStorage())
      .then(() => {
        navigation.navigate("Login");
        logAsyncData(); // Perform any necessary actions after clearing userData
        dispatch(updateUserImage(null));
      })
      .catch((error) => {
        console.log("Error during logout:", error);
      });
  };

  // const getUserDetail = () => {
  //   if (userData.isLoggedIn) {
  //     var data = qs.stringify({
  //       select_user_data: "1",
  //       user_id: reduxUser.userData.userId,
  //     });
  //     var config = {
  //       method: "POST",
  //       url: BaseURL,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Cookie: "PHPSESSID=q9mfmok686ebtrk8t39p65otse",
  //       },
  //       data: data,
  //     };
  //     axios(config).then((response) => {
  //       if (response.data.success == 1) {
  //         dispatch(updateUserImage(response.data.Profile.image));
  //         setImage(response.data.Profile.image);

  //         console.log("set");
  //       } else {
  //         console.log("error raised");
  //       }
  //     });
  //   }
  // };
  // useEffect(() => {
  //   if (reduxUser.isLoggedIn) {
  //     getUserDetail();
  //     // setImage(userData.image)
  //   }
  // }, [reduxUser.isLoggedIn, reduxUser.image]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: wp(30), height: wp(14) }}
          />
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerActiveBackgroundColor: colors.accent,
        
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          // title: "Dashboard",
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Dashboard
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/dashboard.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
                
              }}
            >
              Users
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/users.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Roles"
        component={Roles}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Roles
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/roles.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="GcList"
        component={GcList}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              GC List
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/gc_list.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{
          
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Services
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/services.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Invoices"
        component={Invoices}
        options={{
          // title: "Invoices",
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Invoices
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/invoices.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Contracts"
        component={Contracts}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Contracts
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/contracts.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Messenger"
        component={Messenger}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              Messenger
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/messenger.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      /> */}
      <Drawer.Screen
        name="SystemSetting"
        component={SystemSetting}
        options={{
          drawerLabel: ({ focused, color }) => (
            <Text
              style={{
                fontFamily: "Bold",
                color: focused ? colors.white : colors.black,
                fontSize:labelSize
              }}
            >
              System Setting
            </Text>
          ),

          drawerIcon: ({ focused, size }) => (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Image
                source={require("../assets/images/drawer_images/system_setting.png")}
                style={{
                  tintColor: focused ? colors.accent : colors.grey,
                  height: iconSize,
                  width: iconSize,
                }}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

const styles = StyleSheet.create({
  icons: {
    width: 30,
  },

  drawer: {
    flexDirection: "row",
    paddingVertical: 40,
    // backgroundColor: colors.primary_color,
    marginTop: -5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.white
  },
  welcome: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "normal",
    fontFamily: "SemiBold",
    textTransform: "uppercase",
  },
  login: {
    color: colors.white,
    fontSize: 16,
    textTransform: "capitalize",
    fontFamily: "Bold",
  },
  avatar: {
    marginHorizontal: iconSize,
  },
  icons: {
    width: 30,
  },
  profile: {
    justifyContent: "center",
  },
  HomeSection: {
    borderBottomColor: colors.light_grey,
    borderBottomWidth: 0.4,
    paddingVertical: iconSize,
    marginBottom: 10,
  },
});
