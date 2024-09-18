import { Link, Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, spacing, typography } from "../theme";
import { Pressable, StyleSheet, TextStyle, View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Text } from "@/components";
import Config from "../config";
import { Ionicons } from "@expo/vector-icons";

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  console.log("route name", routeName);
  switch (routeName) {
    case "index":
      return "Home";
    case "Profile":
      return "My profile";
    case "Account":
      return "My account";
  }
}
const SIZE = 100;
const SIZE_SMALL = SIZE / 2;
const ICON_SIZE = SIZE / 4.75;
const ICON_SIZE_SMALL = ICON_SIZE / 2;
const CONTENT = "https://wa.me/c/593963021783";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  // const CTA = translate("landingScreen.order");

  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.palette.lightBackground,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.palette.greenFont,
          fontFamily: typography.fonts.poppins.Poppins_400Regular,
          fontSize: spacing.xl,
        },
        headerTitle: () => {
          return (
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
          );
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row", marginRight: spacing.md }}>
              {/* <Link
                href={"/(drawer)"}
                asChild
                style={{ marginRight: spacing.md }}
              >
                <Pressable>
                  <Ionicons
                    size={spacing.xl}
                    name="options-outline"
                    color={colors.palette.darkKale}
                  />
                </Pressable>
              </Link> */}
              <Link href={"/(home)/account"} asChild>
                <Pressable>
                  <Ionicons
                    size={spacing.xl}
                    name="person-circle-outline"
                    color={colors.palette.darkKale}
                  />
                </Pressable>
              </Link>
            </View>
          );
        },

        tabBarInactiveBackgroundColor: colors.palette.lightBackground,
        tabBarActiveBackgroundColor: colors.palette.greenFont,
        tabBarActiveTintColor: colors.palette.lightYellowGreen, //Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: colors.palette.greenFont,
        // headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={({ route }) => ({
          title: "Home",
          headerTitle: getHeaderTitle(route),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="(menu)"
        options={{
          headerShown: true,
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              type="FontAwesome6"
              name={focused ? "bowl-food" : "bowl-food-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loyalty"
        options={{
          title: "Loyalty",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gift"
        options={{
          title: "Gift",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "gift" : "gift-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
  },
  qr: {
    padding: 15,
    alignSelf: "flex-end",
  },
});

const $reserved: TextStyle = {
  fontFamily: typography.fonts.poppins.boldItalic,
  color: colors.palette.greenFont,
  paddingTop: spacing.sm,
  textAlign: "left",
};
