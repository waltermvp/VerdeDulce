import React from "react"
import { AdminScreen, CreateItemScreen, LoginScreen, MenuScreen, OrderScreen } from "app/screens"
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons" // Add this import

import { colors, spacing } from "app/theme"
import { Linking, View } from "react-native"
import { translate } from "app/i18n"
export type MenuNavigatorParamList = {
  Menu: undefined
  Order: undefined
  Admin: undefined
  Login: undefined
  CreateItem: undefined
}

const Drawer = createDrawerNavigator<MenuNavigatorParamList>()
export const MenuNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, backgroundColor: colors.palette.greenFont }}>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label={translate("common.logIn")}
                labelStyle={{ color: colors.palette.neutral100 }}
                onPress={() => Linking.openURL("https://mywebsite.com/help")}
                icon={() => <Ionicons name="log-in" size={24} color={colors.palette.neutral100} />}
              ></DrawerItem>
            </DrawerContentScrollView>
          </View>
        )
      }}
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
        drawerLabelStyle: { color: colors.palette.neutral100 },
        drawerStyle: {
          backgroundColor: colors.palette.greenFont,
          // width: 240,
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
      <Drawer.Screen name="Admin" component={AdminScreen} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="CreateItem" component={CreateItemScreen} />
    </Drawer.Navigator>
  )
}
