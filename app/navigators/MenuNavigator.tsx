import React from "react"
import { MenuScreen } from "app/screens"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { colors, spacing } from "app/theme"

export type MenuNavigatorParamList = {
  Menu: undefined
}

const Drawer = createDrawerNavigator<MenuNavigatorParamList>()
export const MenuNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        // title: "Verde Dulce",
        headerStyle: { backgroundColor: colors.palette.lightBackground },
        headerTitle: "verdedulce",
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.palette.primary500,
          fontSize: spacing.lg,
        },
        // headerTitle: () => {
        //   return (
        //     <View style={{ flex: 1 }}>
        //       <Image style={{ flex: 1 }} source={require("../../assets/icons/VerdeDulce.svg")} />
        //     </View>
        //   )
        // },
        // header: () => {
        //   return <Text style={{ backgroundColor: "red" }}>testing</Text>
        // },
      }}
    >
      <Drawer.Screen name="Menu" component={MenuScreen} />
    </Drawer.Navigator>
  )
}
