import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Map" component={MapScreen} />
      {/* later:
      <Tab.Screen name="Feedback" component={FeedbackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      */}
    </Tab.Navigator>
  );
}
