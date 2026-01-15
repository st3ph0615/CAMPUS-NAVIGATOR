import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/navigation/AuthContext";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MainTabs from "./src/navigation/MainTabs";
import OfficeDetailsScreen from "./src/screens/OfficeDetailsScreen";
import LocationDetailsScreen from "./src/screens/LocationDetailsScreen";


type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
  OfficeDetails: { officeName: string };
  LocationDetails: { locationName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <RootNavigator/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="OfficeDetails" component={OfficeDetailsScreen} />
        <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
    </NavigationContainer>
    </AuthProvider>
  );
}
