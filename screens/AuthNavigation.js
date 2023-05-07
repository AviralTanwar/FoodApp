import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./Welcomescreen/WelcomeScreen";
import LoginScreen from "./LoginSignupScreen/LoginScreen";
import SignupScreen from "./LoginSignupScreen/SignupScreen";
import AddressScreen from "./LoginSignupScreen/AddressScreen";
import HomeScreen from "./HomeScreen";
import UserProfile from "./UserProfile";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="welcomepage">
      <Stack.Screen
        name="Welcomepage"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="add"
        component={AddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
