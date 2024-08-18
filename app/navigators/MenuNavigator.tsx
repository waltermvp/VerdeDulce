import React from "react"
import { AccountScreen, AdminScreen, LoginScreen, MenuScreen, OrderScreen } from "app/screens"
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons" // Add this import
import { colors, spacing } from "app/theme"
import { View } from "react-native"
import { translate } from "app/i18n"
import { useStores } from "app/models"
import { observer } from "mobx-react-lite"

export type MenuNavigatorParamList = {
  Menu: undefined
  Order: undefined
  Admin: undefined
  Account: undefined
}

const Drawer = createDrawerNavigator<MenuNavigatorParamList>()

export const MenuNavigator = observer(() => {
  const {
    authenticationStore: { isAuthenticated, signOutAuth, signInAuth },
  } = useStores()

  return (
    <Drawer.Navigator
      initialRouteName="Menu"
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, backgroundColor: colors.palette.greenFont }}>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label={isAuthenticated ? translate("common.logOut") : translate("common.logIn")}
                labelStyle={{ color: colors.palette.neutral100 }}
                onPress={async () => {
                  if (isAuthenticated) {
                    await signOutAuth()
                  } else {
                    console.log("signing out")
                    signInAuth({ username: "walter+1@epiphanyapps.com", password: "Chacalona87!" })
                    console.log("signed out")
                  }
                }}
                icon={() => (
                  <Ionicons
                    name={isAuthenticated ? "log-out" : "log-in"}
                    size={24}
                    color={colors.palette.neutral100}
                  />
                )}
              ></DrawerItem>
            </DrawerContentScrollView>
          </View>
        )
      }}
      screenOptions={({ route }) => {
        return {
          headerShown: true,
          // title: "Verde Dulce",
          headerStyle: { backgroundColor: colors.palette.lightBackground },
          headerTitle: route?.name === "Admin" ? "Admin" : "verdedulce",
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
        }
      }}
    >
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      {isAuthenticated && <Drawer.Screen name="Admin" component={AdminScreen} />}
    </Drawer.Navigator>
  )
})
