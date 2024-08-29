/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import * as Screens from "app/screens"
import Config from "../config"
// import { DemoNavigator, DemoTabParamList } from "./DemoNavigator"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"
import { MenuNavigator, MenuNavigatorParamList } from "./MenuNavigator"
import { OrderNavigator } from "./OrderNavigator"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined
  // Demo: NavigatorScreenParams<DemoTabParamList>
  MenuNav: NavigatorScreenParams<MenuNavigatorParamList>
  OrderNav: undefined // NavigatorScreenParams<MenuNavigatorParamList>
  Menu: undefined
  // 🔥 Your screens go here
  Order: undefined
  Admin: undefined
  CreateItem: undefined
  Account: undefined
  Home: undefined
  Loyalty: undefined
  Scan: undefined
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // const {
  //   authenticationStore: { isAuthenticated },
  // } = useStores()

  // useEffect(() => {
  //   // if (!isAuthenticated) {
  //   //   navigationRef.current?.navigate("Login")
  //   // }
  // }, [isAuthenticated])

  return (
    <Stack.Navigator
      screenOptions={{ navigationBarColor: colors.background, headerShown: false }}
      initialRouteName={true ? "MenuNav" : "Login"}
    >
      {/* return <MenuNavigator /> */}

      <Stack.Group>
        <Stack.Screen name="MenuNav" component={MenuNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  )

  return (
    <Stack.Navigator
      screenOptions={{ navigationBarColor: colors.background, headerShown: false }}
      initialRouteName={true ? "MenuNav" : "Login"}
    >
      {/* return <MenuNavigator /> */}

      <Stack.Group>
        <Stack.Screen name="MenuNav" component={MenuNavigator} />
        <Stack.Screen name="OrderNav" component={OrderNavigator} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{ presentation: "card" }}
        // screenOptions={{ presentation: "fullScreenModal" }}
      >
        <Stack.Screen name="Login" component={Screens.LoginScreen} />
        {/* <Stack.Screen name="Menu" component={Screens.MenuScreen} />
        <Stack.Screen name="Order" component={Screens.OrderScreen} />
        <Stack.Screen name="Admin" component={Screens.AdminScreen} /> */}
        <Stack.Screen name="CreateItem" component={Screens.CreateItemScreen} />
      </Stack.Group>

      {/** 🔥 Your screens go here */}
      <Stack.Screen name="Account" component={Screens.AccountScreen} />
      <Stack.Screen name="Home" component={Screens.HomeScreen} />
      <Stack.Screen name="Loyalty" component={Screens.LoyaltyScreen} />
      <Stack.Screen name="Scan" component={Screens.ScanScreen} />
      {/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
