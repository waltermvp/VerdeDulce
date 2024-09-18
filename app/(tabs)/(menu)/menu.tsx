import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ViewStyle, View, Pressable } from "react-native";
import {
  Footer,
  MenuHeader,
  MenuItem,
  MenuItemSmall,
  OrderButton,
  Screen,
  SimpleMenu,
  Text,
} from "../../../components";

import { colors, spacing, typography } from "../../theme";
import { useMediaQuery } from "react-responsive";
import { useFocusEffect } from "@react-navigation/native";
import { Linking } from "react-native"; // Import Linking module
import { useNavigation } from "@react-navigation/native";
// import Config from "../config"
import {
  // transformData,
  transformDataForSectionList,
} from "../../models/ItemStore";
// import { useStores } from "app/models"
// import { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/api";

import { SectionGrid } from "react-native-super-grid";
import { Amplify } from "aws-amplify";
import { record } from "aws-amplify/analytics";
import outputs from "../../../amplify_outputs.json";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

Amplify.configure({
  ...outputs,
  Analytics: {
    Pinpoint: {
      appId: outputs.analytics.amazon_pinpoint.app_id,
      region: outputs.analytics.amazon_pinpoint.aws_region,
    },
  },
});

const sweetgreenMenu = require("../../../menu-es.json");

//TODO: This menu needs to be able to add to cart!
export default observer(function MenuScreen() {
  const [items, setItems] = useState(
    sweetgreenMenu.filter((item: { hidden: boolean }) => item.hidden !== true)
  );

  // const client = generateClient<Schema>()
  // const [visible, setVisible] = React.useState(false)
  // const [isSyncedLocal, setIsSyncedLocal] = useState(false)
  // const showDialog = () => setVisible(true)

  // const hideDialog = () => setVisible(false)
  const navigation = useNavigation();
  const isBigScreen = useMediaQuery({ minWidth: 720 });
  const isMediumScreen = useMediaQuery({ minWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1440 });

  let numberOfColumns;
  if (isLargeScreen) {
    numberOfColumns = 4;
  } else if (isMediumScreen) {
    numberOfColumns = 3;
  } else if (isBigScreen) {
    numberOfColumns = 2;
  } else {
    numberOfColumns = 1;
  }

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
      });
    }, [navigation])
  );

  const renderSectionTitle = ({ section }: { section: any }) => (
    <View
      style={{
        // backgroundColor: "red",
        width: "100%",
        alignItems: "flex-start",
        alignSelf: "flex-end",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "left",
          fontFamily: typography.fonts.poppins.Poppins_200ExtraLight_Italic,
          fontSize: 26,
          lineHeight: 29,
          textDecorationColor: colors.palette.greenFont,
          color: "rgb(14, 21, 14)",
          // backgroundColor: "red",
        }}
        preset="subheading"
      >
        {section.title.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <Screen style={$root} preset="scroll">
      <SectionGrid
        renderSectionFooter={() => <View style={{ height: spacing.xl }}></View>}
        // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={{
          alignItems: "center",
        }}
        // itemDimension={isSmallScreen ? 225 : 350}
        // itemContainerStyle={{ height: 700 }}
        maxItemsPerRow={numberOfColumns}
        sections={transformDataForSectionList(items)}
        renderItem={({ item }) => {
          console.log("item", item);
          return (
            <MenuItem
              preset="menu"
              item={item}
              // showDelete={true}
              onDelete={() => {
                // setItemIDToDelete(item.id)
                // showDialog()
              }}
              href={{
                pathname: "/[menuItem]",
                params: { menuItem: item.slug },
              }}
            />
          );
        }}
        renderSectionHeader={renderSectionTitle}
      />

      <Footer
        onPressQr={() => {
          console.log("onPressQR");
          navigation.navigate("Qr");
        }}
      />
    </Screen>
  );
});

const $root: ViewStyle = {
  // flex: 1,
  // borderWidth: 3,
  // borderColor: "pink",
  backgroundColor: colors.palette.lightBackground,
  // flexWrap: "wrap",
  padding: spacing.md,
};
