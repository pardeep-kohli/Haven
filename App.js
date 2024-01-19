import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { colors } from "./src/assets/themes/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./src/routes/RootNavigator";
import { Provider } from "react-redux";
import useFonts from "./src/api/useFonts";
import store from './src/redux/user/store'
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load custom fonts when the app starts
    useFonts().then(() => setDataLoaded(true));
    // getUserDetail();
  }, []);

  if (!dataLoaded) {
    // Show the AppLoading component while the fonts are loading
    // return <AppLoading />;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.violet} />
      </View>
    );
  }
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
    <StatusBar style="light" backgroundColor={colors.primary}/>
      <RootNavigator />
      {/* <FlashMessage position={{ top: 0, left: 0, right: 0 }} duration={5000} /> */}
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
