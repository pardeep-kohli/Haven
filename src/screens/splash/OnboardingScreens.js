import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";

import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../assets/themes/colors";

import { Gothrough1, Gothrough2 } from "./";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Icon } from "react-native-elements";

const renderPagination = (index, total, context, idxActive) => {
  return (
    <>
      <View style={styles.paginationStyle}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={[
              styles.dots,
              { backgroundColor: index === 0 ? colors.white : colors.accent },
            ]}
          />
          <View
            style={[
              styles.dots,
              { backgroundColor: index === 1 ? colors.white : colors.accent },
            ]}
          />
          {/* <View
            style={[
              styles.dots,
              { backgroundColor: index === 2 ? colors.violet : colors.white },
            ]}
          /> */}
        </View>
      </View>
    </>
  );
};

export default class OnboardingScreens extends Component {
  constructor(props) {
    super(props);
    this.onPressNext = this.onPressNext.bind(this);

    this.state = {
      idxActive: 0,
      setNext: false,
    };
  }

  onPressPrev = () => {
    const { idxActive } = this.state;
    if (idxActive > 0) {
      this.refs.swiper.scrollBy(-1);
    }
  };

  onPressNext = () => {
    const { idxActive } = this.state;
    // Probably best set as a constant somewhere vs a hardcoded 5
    if (idxActive == 1) {
      this.setState = {
        setNext: true,
      };
      this.props.navigation.replace("Login");
    }
    if (idxActive < 1) {
      this.refs.swiper.scrollBy(+1);
    }
  };

  render() {
    console.log(this.state.idxActive);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/curve_bg.jpg")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <View style={{}}>
              {/* <Text
                style={{
                  fontSize: hp(1.8),
                  alignSelf: "center",
                  color: colors.violet,
                }}
              >
                {this.state.idxActive + 1}
              </Text> */}
            </View>
            <TouchableOpacity
              style={styles.skip_button}
              onPress={() => this.props.navigation.replace("DrawerNavigator")}
            >
              <View>
                {this.state.idxActive < 2 && (
                  <Text style={styles.skip_text}>Skip </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <Swiper
            style={styles.wrapper}
            renderPagination={renderPagination}
            onIndexChanged={(idxActive) => this.setState({ idxActive })}
            showsButtons={false}
            loop={false}
            ref={"swiper"}
          >
            <Gothrough1 />
            <Gothrough2 />
          </Swiper>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 40,
              paddingHorizontal: 20,
            }}
          >
            <View style={styles.buttoncontainer2}>
              {/* {this.state.idxActive >0 && ( */}

              {/* <TouchableOpacity
            onPress={this.onPressPrev}
            title="previous"
            index={this.state.idxActive}
            >
              <Text>previous</Text>
            </TouchableOpacity> */}
            </View>
            <View style={styles.buttoncontainer}>
              <TouchableOpacity
                onPress={this.onPressNext}
                activeOpacity={0.6}
                index={this.state.idxActive}
                disable={this.state.setNext}
                style={{
                  backgroundColor: colors.secondary,
                  position: "absolute",
                  bottom: -15,
                  right: 0,
                  flexDirection: "row",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  alignItems: "center",
                  borderRadius: 25,
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontFamily: "SemiBold",
                    marginRight: 10,
                  }}
                >
                  Next
                </Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: colors.accent,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign
                    name={"arrowright"}
                    size={20}
                    color={colors.white}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttoncontainer: {
    // position: "absolute",
    // bottom: 60,
    // right: 10,
  },
  buttoncontainer2: {
    // position: "absolute",
    // bottom: 60,
    // left: 10,
  },
  dots: {
    width: hp(1.5),
    height: hp(1.5),
    borderRadius: hp(1.5) / 2,
    marginRight: 5,
    borderWidth: 1.5,
    borderColor: colors.white,
    // left: 10,
    top: 5,
  },
  skip_button: {
    // position: "absolute",
    // right: 20,
    // top: 30,
    // zIndex: 1,
    // alignSelf:'flex-end'
  },
  skip_text: {
    fontSize: hp(1.8),
    color: colors.black,
    fontFamily: "Medium",
  },
  paginationStyle: {
    // position: "absolute",
    // bottom: 170,
    // alignItems: "center",
    // justifyContent: "center",
    left: 20,
  },
  // wrapper: {
  //   backgroundColor: "red",
  //   flex: 1,
  // },
});
