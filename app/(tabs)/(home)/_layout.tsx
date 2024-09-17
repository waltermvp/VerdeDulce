import { Link, Stack } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, spacing, typography } from "../../theme";
import { StyleSheet, TextStyle } from "react-native";
import { useMediaQuery } from "react-responsive";
import { Ionicons } from "@expo/vector-icons";

const SIZE = 100;
const SIZE_SMALL = SIZE / 2;
const ICON_SIZE = SIZE / 4.75;
const ICON_SIZE_SMALL = ICON_SIZE / 2;
const CONTENT = "https://wa.me/c/593963021783";

export default function HomeLayout() {
  // const colorScheme = useColorScheme();
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  // const CTA = translate("landingScreen.order");

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        // title: "Home",
        // headerShown: false,
        headerStyle: {
          backgroundColor: colors.palette.lightBackground,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => null,
          header: () => null,
          title: "Home",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerLeft: () => null,
          //TODO: make the title user name
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="account"
        options={{
          title: "Account Info",
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
