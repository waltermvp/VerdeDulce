import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import {
  ViewStyle,
  View,
  Pressable,
  Dimensions,
  TextStyle,
  ScrollView,
} from "react-native";
import {
  Button,
  Footer,
  MenuHeader,
  MenuItem,
  MenuItemSmall,
  OrderButton,
  Screen,
  SimpleMenu,
  Text,
  ThemedIngredientList,
} from "../components";

import { colors, spacing, typography } from "./theme";
import { useMediaQuery } from "react-responsive";
import { useFocusEffect } from "@react-navigation/native";
import { Linking } from "react-native"; // Import Linking module
import { useNavigation, useRoute } from "@react-navigation/native";
// import Config from "../config"
import {
  // transformData,
  transformDataForSectionList,
} from "./models/ItemStore";
// import { useStores } from "app/models"
// import { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/api";

import { SectionGrid } from "react-native-super-grid";
import { Amplify } from "aws-amplify";
import { record } from "aws-amplify/analytics";
import outputs from "../amplify_outputs.json";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { imageCDNURL } from "./utils/linkbuilder";
const width = Dimensions.get("window").width;
// Amplify.configure({
//   ...Amplify.getConfig(),
//   analytics: outputs.analytics,
// });
Amplify.configure({
  ...Amplify.getConfig(),
  Analytics: {
    Pinpoint: {
      appId: outputs.analytics.amazon_pinpoint.app_id,
      region: outputs.analytics.amazon_pinpoint.aws_region,
    },
  },
});

const sweetgreenMenu = require("../menu-es.json");

//TODO: This menu needs to be able to add to cart!
export default observer(function MenuItem() {
  const route = useRoute();
  const { menuItem } = useLocalSearchParams();

  const [item, setItem] = useState(
    sweetgreenMenu.filter((item: { slug: string }) => item.slug === menuItem)[0]
  );
  console.log("item", item);

  // const client = generateClient<Schema>()
  // const [visible, setVisible] = React.useState(false)
  // const [isSyncedLocal, setIsSyncedLocal] = useState(false)
  // const showDialog = () => setVisible(true)

  // const hideDialog = () => setVisible(false)

  const navigation = useNavigation();
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 768 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" });
  console.log("is big slug", menuItem);
  // console.log("is isSmallScreen", isSmallScreen);

  // console.log(" ", imageCDNURL("menu/Hot_Honey_Chicken.png"));
  // useEffect(() => {
  //   // if (!displayID) {
  //   //   // setMode(MODE.MISSING_UDID)
  //   //   return
  //   // }

  //   const sub = client.models.Item.observeQuery({
  //     // filter: { displayId: { eq: displayID } },
  //     authMode: "apiKey",
  //   }).subscribe({
  //     next: ({ items, isSynced }) => {
  //       setIsSyncedLocal(isSynced)papcka
  //       if (isSynced) {
  //         if (items.length > 0) {
  //           const transformed = transformDataForSectionList(items)
  //           console.log("transformed", transformed)
  //           setItems(transformed)
  //         }

  //         // setSlideCount(items.length)
  //       }
  //     },
  //   })
  //   return () => {
  //     sub.unsubscribe()
  //   }
  // }, [])

  //TODO: localize
  //TODO: https://github.com/waltermvp/VerdeDulce/issues/42

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: colors.palette.lightBackground,
        },
        headerTitle: "",
        headerRight: () => {
          return (
            <Link href={"/(tabs)/(menu)/menu"} asChild>
              <Pressable style={{ marginRight: spacing.sm }}>
                <Ionicons
                  name="close"
                  size={spacing.xl}
                  color={colors.palette.darkKale}
                />
              </Pressable>
            </Link>
          );
        },
        headerLeft: () => {
          return (
            <Link href={"/(tabs)/(menu)/menu"} asChild>
              <Pressable style={{ marginLeft: spacing.sm }}>
                <Ionicons
                  size={spacing.xl}
                  name="arrow-back"
                  color={colors.palette.darkKale}
                />
              </Pressable>
            </Link>
          );
        },
      });
    }, [navigation])
  );

  const number = item.price;
  const dollars = (number / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const visibleText = `${dollars} - ${item.calories} CAL`;

  return (
    <Screen style={$root} preset="fixed">
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          // paddingHorizontal: spacing.sm,
          // backgroundColor: "red",
        }}
      >
        <Image
          source={{
            uri: imageCDNURL(item.url),
          }}
          style={{ width: "90%", aspectRatio: 1 }}
        />
        <View style={{ width, flex: 1, paddingHorizontal: spacing.md }}>
          <Text
            style={{
              textAlign: "left",
              alignSelf: "flex-start",
              flexWrap: "wrap",
              fontSize: spacing.lg,
              //TODO: figure out why this is needed
              maxWidth: width,
              lineHeight: spacing.xl - spacing.xxs,
              marginTop: spacing.md,
            }}
            preset="heading"
          >
            {item.name}
          </Text>
          <Text
            preset="subheading"
            style={{
              textAlign: "left",
              alignSelf: "flex-start",
              fontSize: spacing.md + spacing.xxs,
              fontFamily: typography.fonts.poppins.Poppins_300Light,
            }}
          >
            {visibleText}
          </Text>
          <ThemedIngredientList
            style={{ marginTop: spacing.lg }}
            data={ITEMS}
          />
        </View>
      </ScrollView>
      <View style={$footer}>
        <Link href={"/"}>
          <Button text="Customize" style={$button} />
        </Link>
        <Link href={"/"}>
          <Button
            text="Add to Bag"
            style={$buttonGreen}
            textStyle={$buttonText}
          />
        </Link>
      </View>
    </Screen>
  );
});

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.lightBackground,
  flexDirection: "row",
};

const $button: ViewStyle = {
  borderRadius: 33,
  paddingHorizontal: spacing.lg,
  borderWidth: 1,

  borderColor: colors.palette.neutral900,
  backgroundColor: colors.palette.lightBackground,
};
const $buttonGreen: ViewStyle = {
  borderRadius: 33,
  paddingHorizontal: spacing.lg,
  borderWidth: 1,

  borderColor: colors.palette.neutral900,
  backgroundColor: "rgb(0, 71, 60)",
};
const $buttonText: TextStyle = {
  color: colors.palette.neutral100,
  fontFamily: typography.fonts.poppins.Poppins_300Light,
};

const $footer: ViewStyle = {
  height: 81,
  borderTopColor: colors.palette.darkKale,
  borderTopWidth: 1,
  flexDirection: "row",
  width: "100%",
  // backgroundColor: "red",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: spacing.md,
};

const ITEMS = [
  {
    title: "Shredded Kale",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_ShreddedKale_800x800_cspcol.png"
    ),
  },
  {
    title: "Wild Rice",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_WildRice_800x800_mhyu2l.png"
    ),
  },
  {
    title: "Roasted Sweet Potato",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_RoastedSweetPotatoes_800x800_lnumy5.png"
    ),
  },
  {
    title: "Roasted Almonds",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_RoastedSweetPotatoes_800x800_lnumy5.png"
    ),
  },
  {
    title: "Apples",
    url: imageCDNURL("menu/ingredients-png/S423_OLO_Apples_800x800_kh6mdc.png"),
  },
  {
    title: "Goat Cheese",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_GoatCheese_800x800_nj7e9y.png"
    ),
  },
  {
    title: "Blackened Chicken",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_BlackenedChicken_800x800_wpw1oa.png"
    ),
  },
  {
    title: "Maple Glazed Brussels",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_RoastedSweetPotatoes_800x800_lnumy5.png"
    ),
  },
  {
    title: "Balsamic Vinaigrette",
    url: imageCDNURL(
      "menu/ingredients-png/S423_OLO_BalsamicVinaigrette_800x800_upmsnl.png"
    ),
  },
];
