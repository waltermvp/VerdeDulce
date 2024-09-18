import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ViewStyle, View, Pressable, Dimensions } from "react-native";
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
const { width } = Dimensions.get("window");
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
              <Pressable>
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
              <Pressable>
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
      <View style={{ flex: 13, alignItems: "center" }}>
        <Image
          source={{
            uri: imageCDNURL(item.url),
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ textAlign: "left", alignSelf: "flex-start" }}>
          {item.name}
        </Text>
        <Text style={{ textAlign: "left", alignSelf: "flex-start" }}>
          {visibleText}
        </Text>
        <ThemedIngredientList
          style={{ flex: 1, width, backgroundColor: "green" }}
        />
        {/* <ThemedIngredientList style={{ flex: 1 }} /> */}
      </View>
      <View
        style={{
          // position: "absolute",
          // flex: 1,
          borderTopColor: colors.palette.darkKale,
          borderTopWidth: 1,
          flexDirection: "row",
          // width: "100%",
          backgroundColor: "red",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "pink",
        }}
      >
        <Link href={"/"}>
          <Button text="Customize" style={{ flex: 1 }} />
        </Link>
        <Link href={"/"}>
          <Button text="Add to Bag" />
        </Link>
      </View>
    </Screen>
  );
});

const $root: ViewStyle = {
  // flex: 1,
  // alignItems: "flex-end",
  // height: "100%",
  // justifyContent: "space-evenly",

  // borderWidth: 3,
  // borderColor: "pink",
  backgroundColor: colors.palette.lightBackground,

  // flexWrap: "wrap",
  // paddingVertical: spacing.md,
};
