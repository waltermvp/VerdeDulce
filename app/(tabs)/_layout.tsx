import { Tabs, useNavigation } from "expo-router";
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
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        // drawerStyle{
        //   backgroundColor: '#c6cbef',
        //   width: 240,
        // },

        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem
              label="Help"
              onPress={() => Linking.openURL("https://mywebsite.com/help")}
            /> */}
          </DrawerContentScrollView>
        )}
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: colors.palette.lightBackground,
            width: 240,
          },
          drawerLabelStyle: {
            color: colors.palette.greenFont,
            fontFamily: typography.fonts.poppins.regular,
            fontSize: spacing.lg,
          },
          headerShown: true,
          headerTitleAlign: "center",
          // header: () => null,
          headerTitleStyle: {
            color: colors.palette.greenFont,
            fontFamily: typography.fonts.poppins.semiBold,
            fontSize: spacing.xl,
          },
          headerTitle: "verdedulce",
          headerStyle: {
            // backgroundColor: Colors[colorScheme ?? "light"].tint,
            backgroundColor: colors.palette.lightBackground,
          },
          headerLeft: ({ pressColor }) => (
            <Ionicons
              name="menu"
              size={44}
              color={colors.palette.greenFont}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerTintColor: Colors[colorScheme ?? "light"].background,
        })}
      >
        <Drawer.Screen
          name="index"
          initialParams={{
            headerShown: "true",
            footerShown: "true",
            menuType: "homepage",
          }}
          options={{
            title: "Menu",

            // tabBarIcon: ({ color, focused }) => (
            //   <TabBarIcon
            //     name={focused ? "home" : "home-outline"}
            //     color={color}
            //   />
            // ),
          }}
        />
        <Drawer.Screen
          name="FAQ"
          options={{
            title: "FAQ",
            // tabBarIcon: ({ color, focused }) => (
            //   <TabBarIcon
            //     name={focused ? "home" : "home-outline"}
            //     color={color}
            //   />
            // ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "FAQ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          title: "Second",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
