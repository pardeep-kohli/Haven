import { CommonActions } from "@react-navigation/native";

export const resetNavigation = (navigation, name) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: name }],
    })
  );
};