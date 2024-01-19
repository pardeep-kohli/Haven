import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Messages from "./Messages";

const Stack = createStackNavigator();
export default function M_Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}
