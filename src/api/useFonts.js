import * as Font from "expo-font";

const useFonts = async () => {
  return Font.loadAsync({
    "Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "BoldItalic": require("../assets/fonts/Montserrat-BoldItalic.ttf"),
    "ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    "ExtraBoldItalic": require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
    "Italic": require("../assets/fonts/Montserrat-Italic.ttf"),
    "Light": require("../assets/fonts/Montserrat-Light.ttf"),
    "LightItalic": require("../assets/fonts/Montserrat-LightItalic.ttf"),
    "Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "MediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
    "Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });
};
export default useFonts;