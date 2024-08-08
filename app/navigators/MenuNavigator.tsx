import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MenuScreen } from "app/screens"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Text } from "app/components"
import { colors, spacing, typography } from "app/theme"
import { Image } from "expo-image"
import { View } from "react-native-reanimated/lib/typescript/Animated"
import { t } from "i18n-js"

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
