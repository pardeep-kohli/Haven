import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import Forget from "../screens/auth/Forget";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingScreens from "../screens/splash/OnboardingScreens";
import { useDispatch, useSelector } from "react-redux";
const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  const reduxUser = useSelector((state) => state.auth);
  console.log("reduxUser", reduxUser);

  return (
    <AuthStack.Navigator>
      {reduxUser.isLoggedIn != true ? (
        <>
          <AuthStack.Screen
            name="OnboardingScreens"
            component={OnboardingScreens}
            options={{
              headerShown: false,
              ...TransitionPresets.DefaultTransition,
            }}
          />
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              ...TransitionPresets.DefaultTransition,
            }}
          />
          <AuthStack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
              ...TransitionPresets.DefaultTransition,
            }}
          />

          <AuthStack.Screen
            name="Forget"
            component={Forget}
            options={{
              headerShown: false,
              ...TransitionPresets.DefaultTransition,
            }}
          />
          <AuthStack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </>
      ) : (
        <AuthStack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      )}
    </AuthStack.Navigator>
  );
}
