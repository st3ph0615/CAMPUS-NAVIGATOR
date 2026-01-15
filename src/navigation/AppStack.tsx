import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabs from "./MainTabs";
import OfficeDetailsScreen from "../screens/OfficeDetailsScreen";
import LocationDetailsScreen from "../screens/LocationDetailsScreen";

export type AppStackParamList = {
  MainTabs: undefined;
  OfficeDetails: { officeName: string };
  LocationDetails: { locationName: string };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="OfficeDetails" component={OfficeDetailsScreen} />
      <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
    </Stack.Navigator>
  );
}
