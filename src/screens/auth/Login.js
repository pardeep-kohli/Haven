import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { colors } from "../../assets/themes/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";
import * as qs from "qs";
const { width, height } = Dimensions.get("window");
export default function Login({ navigation }) {
  const BaseUrl = "http://idigitalweb.tech/haven/leadgo/api/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [valid, setValid] = useState(false);

  const handleLogin = async () => {
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Please enter the email");
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    // Validate password length
    if (!password) {
      setPasswordError("Please enter the password");
    } else if (password.length < 4) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }

    if (emailPattern.test(email) && password.length >= 3) {
      setValid(true);
      console.log("email: ", email, " password: ", password);
    }
  };

  if (valid) {
    var data = qs.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: BaseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config).then((response) => {
      console.log(response);
      try {
        if (response.data.success) {
          console.log("login");
        } else {
          console.log("failed");
        }
      } catch (error) {
        console.error("Error getting user detail:", error);
      }
    });
  }

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
            <Input
              label={"Email"}
              placeholder={"Enter your email"}
              value={email}
              onChangeText={(text) => setEmail(text)}
              error={emailError}
            />
            <Input
              label={"Password"}
              password
              placeholder={"Enter your password"}
              value={password}
              onChangeText={(text) => setPassword(text)}
              error={passwordError}
            />
            <TouchableOpacity>
              <Text style={styles.forgetText}>Forget your password?</Text>
            </TouchableOpacity>
            <CustomButton buttonLabel={"Login"} buttonPress={handleLogin} />
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
    marginTop: wp(15),
  },
  loginText: {
    fontFamily: "Bold",
    fontSize: wp(4.5),
    marginBottom: 20,
  },
  forgetText: {
    color: colors.accent,
    fontFamily: "SemiBold",
    marginVertical: 5,
  },
});
