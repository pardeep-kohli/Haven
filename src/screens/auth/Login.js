import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { colors } from "../../assets/themes/colors";
const { width, height } = Dimensions.get("window");

export default function Login({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
      <ImageBackground
        source={require("../../assets/images/login_bg.jpg")}
        style={{ height: height, width: width }}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <Input label={"Email"} placeholder={"Enter your email"} />
          <Input
            label={"Password"}
            password
            placeholder={"Enter your pasword"}
          />
          <TouchableOpacity>
            <Text style={styles.forgetText}>Forget your password?</Text>
          </TouchableOpacity>
          <CustomButton buttonLabel={"Login"} buttonPress={()=>navigation.navigate("DrawerNavigator")}/>
        </View>
      </ImageBackground>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: wp(19),
    width: wp(40),
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: wp(15),
  },
  loginContainer: {
    margin: wp(5),
    padding: wp(5),
    backgroundColor: colors.white,
    borderRadius: wp(4),
    elevation: 20,
    marginTop:wp(15)
  },
  loginText: {
    fontFamily: "Bold",
    fontSize: 18,
    marginBottom: 20,
  },
  forgetText:{
    color:colors.accent,
    fontFamily:"SemiBold",
    marginVertical:5
  }
});
