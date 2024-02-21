import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Dashboard from "./Dashboard";
import ViewContracts from "../../drawer/Contracts/ViewContracts";
const Stack = createStackNavigator();
export default function D_Stack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ViewContracts" component={ViewContracts} />
    </Stack.Navigator>
  );
}
