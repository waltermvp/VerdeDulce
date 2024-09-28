import { Stack } from "expo-router";
import React from "react";
import { colors, spacing, typography } from "../../theme";
import { StyleSheet, TextStyle } from "react-native";

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
