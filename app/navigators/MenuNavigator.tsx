import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  MenuScreen,
} from "app/screens"

export type MenuNavigatorParamList = {
  Menu: undefined
}

const Stack = createNativeStackNavigator<MenuNavigatorParamList>()
export const MenuNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  )
}
