import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { colors } from "./colors";

export const COLORS = {
  // Error
  error: "rgba(246, 86, 93, 1)",
  error80: "rgba(246, 86, 93, 0.8)",
  error60: "rgba(246, 86, 93, 0.6)",
  error20: "rgba(246, 86, 93, 0.2)",
  error08: "rgba(246, 86, 93, 0.08)",

  // Primary
  primary: "rgba(78, 85, 175, 1)",
  primary80: "rgba(78, 85, 175, 0.8)",
  primary60: "rgba(78, 85, 175, 0.6)",
  primary20: "rgba(78, 85, 175, 0.2)",
  primary08: "rgba(78, 85, 175, 0.08)",

  // Secondary
  secondary: "rgba(161, 219, 245, 1)",
  secondary80: "rgba(161, 219, 245, 0.8)",
  secondary60: "rgba(161, 219, 245, 0.6)",
  secondary20: "rgba(161, 219, 245, 0.2)",
  secondary08: "rgba(161, 219, 245, 0.08)",

  // Success
  success: "rgba(253, 212, 70, 1)",
  success80: "rgba(253, 212, 70, 0.8)",
  success60: "rgba(253, 212, 70, 0.6)",
  success20: "rgba(253, 212, 70, 0.2)",
  success08: "rgba(253, 212, 70, 0.08)",

  // Dark
  dark: "rgba(13, 15, 35, 1)",
  dark80: "rgba(13, 15, 35, 0.8)",
  dark60: "rgba(13, 15, 35, 0.6)",
  dark20: "rgba(13, 15, 35, 0.2)",
  dark08: "rgba(13, 15, 35, 0.08)",

  // Grey
  grey: "rgba(160, 161, 180, 1)",
  grey80: "rgba(160, 161, 180, 0.8)",
  grey60: "rgba(160, 161, 180, 0.6)",
  grey20: "rgba(160, 161, 180, 0.2)",
  grey08: "rgba(160, 161, 180, 0.08)",

  // Light Grey
  lightGrey: "rgba(247, 247, 247, 1)",
  lightGrey80: "rgba(247, 247, 247, 0.8)",
  lightGrey60: "rgba(247, 247, 247, 0.6)",
  lightGrey20: "rgba(247, 247, 247, 0.2)",
  lightGrey08: "rgba(247, 247, 247, 0.08)",

  // Light
  light: "rgba(255, 255, 255, 1)",
  light80: "rgba(255, 255, 255, 0.8)",
  light60: "rgba(255, 255, 255, 0.6)",
  light20: "rgba(255, 255, 255, 0.2)",
  light08: "rgba(255, 255, 255, 0.08)",

  // Support 1
  support1: "rgba(110, 162, 255, 1)",
  support1_08: "rgba(110, 162, 255, 0.08)",

  // Support 2
  support2: "rgba(249, 161, 218, 1)",
  support2_08: "rgba(249, 161, 218, 0.08)",

  // Support 3
  support3: "rgba(0, 210, 224, 1)",
  support3_08: "rgba(0, 210, 224, 0.08)",

  // Support 4
  support4: "rgba(255, 132, 13, 1)",
  support4_08: "rgba(255, 132, 13, 0.08)",

  // Support 5
  support5: "rgba(123, 96, 238, 1)",
  support5_08: "rgba(123, 96, 238, 0.08)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: wp(10),
  h1: wp(7),
  h2: wp(5),
  h3: wp(4),
  h4: wp(3.5),
  h5: wp(3),
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: { fontFamily: "Black", fontSize: SIZES.largeTitle },
  h1: {
    fontFamily: "Bold",
    fontSize: SIZES.h1,
    lineHeight: 36,
    color: colors.black,
    fontWeight: "bold",
  },
  h2: {
    fontFamily: "Bold",
    fontSize: SIZES.h2,
    lineHeight: 30,
    color: colors.black,
  },
  h3: {
    fontFamily: "SemiBold",
    fontSize: SIZES.h3,
    lineHeight: 22,
    color: colors.black,
  },
  h4: {
    fontFamily: "SemiBold",
    fontSize: SIZES.h4,
    lineHeight: 22,
    color: colors.black,
  },
  h5: {
    fontFamily: "SemiBold",
    fontSize: SIZES.h5,
    lineHeight: 22,
    color: colors.black,
  },
  body1: {
    fontFamily: "Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: colors.black,
  },
  body2: {
    fontFamily: "Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
    color: colors.black,
  },
  body3: {
    fontFamily: "Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
    color: colors.black,
  },
  body4: {
    fontFamily: "Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: colors.black,
  },
  body5: {
    fontFamily: "Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: colors.black,
  },
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
