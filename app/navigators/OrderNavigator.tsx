import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
  AccountScreen,
  HomeScreen,
  LoyaltyScreen,
  MenuScreen,
  ScanScreen,
  WelcomeScreen,
} from "app/screens"

export type OrderNavigatorParamList = {
  Home: undefined
  Menu: undefined
  Loyalty: undefined
  Scan: undefined
  Account: undefined
}

const Stack = createBottomTabNavigator<OrderNavigatorParamList>()
export const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Loyalty" component={LoyaltyScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  )
}
