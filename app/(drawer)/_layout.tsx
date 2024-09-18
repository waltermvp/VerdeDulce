import { Link } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, spacing, typography } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Linking, StyleSheet, TextStyle } from "react-native";
import { OrderButton, Text } from "../../components";
import { translate } from "../i18n";
import Config from "../config";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const CTA = translate("landingScreen.order");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="Menu"
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <OrderButton
              style={{
                margin: spacing.md,
              }}
              text={CTA}
              onPress={() => Linking.openURL(Config.WHATSAPP_CATALOG_URL)}
            />
          </DrawerContentScrollView>
        )}
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: colors.palette.lightBackground,
            width: 240,
          },
          drawerLabelStyle: $drawerLabelStyle,
          drawerActiveTintColor: colors.palette.greenFont,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.palette.greenFont,
            fontFamily: typography.fonts.poppins.Poppins_400Regular,
            fontSize: spacing.xl,
          },
          headerStyle: {
            // backgroundColor: Colors[colorScheme ?? "light"].tint,
            // fontfamily: typography.fonts.poppins.semiBold,
            backgroundColor: colors.palette.lightBackground,
          },
          headerLeft: ({ pressColor }) => (
            <Ionicons
              style={{ marginLeft: spacing.sm }}
              name="menu-outline"
              size={32}
              color={colors.palette.greenFont}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerTintColor: Colors[colorScheme ?? "light"].background,
          headerTitle: () => (
            <Link href={"/"}>
              <Text
                preset="midHeading"
                style={{
                  color: colors.palette.greenFont,
                  fontFamily: typography.fonts.poppins.semiBold,
                }}
              >
                {Config.APP_NAME}
              </Text>
            </Link>
          ),
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Menu",
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "menu" : "menu-outline"}
                size={24}
                color={focused ? colors.palette.greenFont : color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="FAQ"
          options={{
            title: "FAQ",
            drawerIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "code-slash" : "code-slash-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const $drawerLabelStyle: TextStyle = {
  color: colors.palette.greenFont,
  fontFamily: typography.fonts.poppins.semiBold,
  fontSize: spacing.lg,
};
