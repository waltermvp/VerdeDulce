import { Link, Stack } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, spacing, typography } from "../../theme";
import { Pressable, StyleSheet, TextStyle, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";
import { Text } from "@/components";
import Config from "../../config";
import { Ionicons } from "@expo/vector-icons";

function getHeaderTitle(
  route: RouteProp<Record<string, object | undefined>, string>
) {
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

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  // const CTA = translate("landingScreen.order");

  return (
    <Stack
      initialRouteName="(home)"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen
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
      /> */}
      <Stack.Screen
        name="menu"
        options={{
          title: "Menu",
        }}
      />
      <Stack.Screen
        name="[menuItem]"
        options={{
          title: "Menu Item",
        }}
      />
    </Stack>
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
