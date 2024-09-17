import { Link, Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, spacing, typography } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Linking, Pressable, StyleSheet, TextStyle, View } from "react-native";
import { QrCodeSvg } from "react-native-qr-svg";
import { Image } from "expo-image";
import { useMediaQuery } from "react-responsive";
import { imageCDNURL } from "../utils/linkbuilder";
import { OrderButton, Text } from "../../components";
import { translate } from "../i18n";

const SIZE = 100;
// const SIZE_SMALL = SIZE / 2;
const ICON_SIZE = SIZE / 4.75;
// const ICON_SIZE_SMALL = ICON_SIZE / 2;
const CONTENT = "https://wa.me/c/593963021783";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  const CTA = translate("landingScreen.order");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="Menu"
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem
              label="Help"
              onPress={() => Linking.openURL("https://mywebsite.com/help")}
            /> */}
            <OrderButton
              style={{
                margin: spacing.md,
              }}
              text={CTA}
              onPress={() => Linking.openURL(CONTENT)}
            />
            {/* <View
              {...props}
              style={{
                margin: spacing.md,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Pressable
                onPress={() => Linking.openURL("https://wa.me/c/593963021783")}
              >
                <QrCodeSvg
                  style={[
                    styles.qr,
                    { padding: spacing.xs, alignSelf: "flex-start" },
                  ]}
                  value={CONTENT}
                  frameSize={isSmallScreen ? SIZE_SMALL : SIZE}
                  contentCells={5}
                  content={
                    <Image
                      style={{
                        width: isSmallScreen ? ICON_SIZE_SMALL : ICON_SIZE,
                        height: isSmallScreen ? ICON_SIZE_SMALL : ICON_SIZE,
                      }}
                      source={{ uri: imageCDNURL("VerdeDulce_logo.png") }}
                    />
                  }
                  backgroundColor={colors.palette.greenFont}
                  dotColor="#ffff"
                  contentStyle={styles.box}
                />
                <Text style={$reserved}>&copy; 2024 verdedulce</Text>
              </Pressable>
            </View> */}
          </DrawerContentScrollView>
        )}
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: colors.palette.lightBackground,
            width: 240,
          },
          drawerLabelStyle: {
            color: colors.palette.greenFont,
            fontFamily: typography.fonts.poppins.semiBold,
            fontSize: spacing.lg,
          },
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
                verdedulce
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
