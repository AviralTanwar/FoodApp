import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/Welcomescreen/WelcomeScreen";
import LoginScreen from "./screens/LoginSignupScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/LoginSignupScreen/SignupScreen";
import AddressScreen from "./screens/LoginSignupScreen/AddressScreen";
import UserProfile from "./screens/UserProfile";
import ProductPage from "./screens/ProductPage";
import {Platform} from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
    <NavigationContainer style={styles.container} >
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
        <Stack.Screen
          name="product"
          component={ProductPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "000",
    paddingTop: Platform.OS === 'ios'? 40:0,
  },
});
