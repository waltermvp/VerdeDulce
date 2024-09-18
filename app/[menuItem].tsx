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

  // const renderSectionTitle = ({ section }: { section: any }) => (
  //   <View
  //     style={{
  //       // backgroundColor: "red",
  //       width: "100%",
  //       alignItems: "flex-start",
  //       alignSelf: "flex-end",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <Text
  //       style={{
  //         textAlign: "left",
  //         fontFamily: typography.fonts.poppins.Poppins_200ExtraLight_Italic,
  //         fontSize: 26,
  //         lineHeight: 29,
  //         textDecorationColor: colors.palette.greenFont,
  //         color: "rgb(14, 21, 14)",
  //         // backgroundColor: "red",
  //       }}
  //       preset="subheading"
  //     >
  //       {section.title.toUpperCase()}
  //     </Text>
  //   </View>
  // );
  const number = item.price;
  const dollars = (number / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const visibleText = `${dollars} - ${item.calories} CAL`;

  return (
    <Screen style={$root} preset="scroll">
      <Text>{menuItem}SLUG</Text>

      <Image
        source={{
          uri: imageCDNURL(item.url),
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{item.name}</Text>
      <Text>{visibleText}</Text>
      <ThemedIngredientList />

      {/* <SectionGrid
        renderSectionFooter={() => <View style={{ height: spacing.xl }}></View>}
        // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={{
          alignItems: "center",
        }}
        // itemDimension={isSmallScreen ? 225 : 350}
        // itemContainerStyle={{ height: 200 }}
        maxItemsPerRow={isSmallScreen ? 1 : 3}
        sections={transformDataForSectionList(items)}
        renderItem={({ item }) => (
          <MenuItem
            preset="menu"
            item={item}
            // showDelete={true}
            onPress={async () => {
              record({
                name: "orderNow",
                attributes: { name: item.name },
              });

              // const phoneNumber = "+593963021783" // Replace with the actual phone number
              // console.log("item", item.itemURL)
              // const message = translate("menuScreen.orderMenuItemMessage", {
              //   item: item.name,
              // }) // Replace with the actual message
              // console.log("message", message)
              // const url = `whatsapp://send?text=${encodeURIComponent(
              //   message + " " + item.itemURL,
              // )}&phone=${encodeURIComponent(phoneNumber)}`
              const url = item.itemURL;
              await Linking.openURL(url).catch((err) =>
                console.error("Failed to open WhatsApp", err)
              );
              // e.prevent
            }}
            onDelete={() => {
              // setItemIDToDelete(item.id)
              // showDialog()
            }}
            show={true}
          />
        )}
        renderSectionHeader={renderSectionTitle}
      /> */}
      {/* {menuType === "menu" && (
        <View>
          <SectionGrid
            renderSectionFooter={() => (
              <View style={{ height: spacing.xl }}></View>
            )}
            // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
            stickySectionHeadersEnabled={true}
            contentContainerStyle={{
              flexWrap: "wrap",
              // margin: spacing.xxl,
              // paddingHorizontal: spacing.xxs,
              // alignItems: "center",
              // rowGap: 100
              // gap: 100,
              // columnGap: 100,
            }}
            // itemDimension={itemDimension}
            itemContainerStyle={{ width: itemDimension, height: itemHeight }}
            // itemContainerStyle={{ height: 200 }}
            // maxItemsPerRow={isHugeScreen ? 5 : isBigScreen ? 2 : 1}
            maxItemsPerRow={4}
            sections={transformDataForSectionList(items).slice(0, 2)}
            renderItem={({ item }) => (
              <MenuItemSmall
                name={item.name}
                price={item.price}
                description={item.description}
              />
            )}
            renderSectionHeader={renderSectionTitle}
          />
          <View
            style={{
              flexDirection: "row",
              // backgroundColor: "red",
              // alignItems: "flex-start",
              // flex: 1,
            }}
          >
            <SectionGrid
              renderSectionFooter={() => (
                <View style={{ height: spacing.xl }}></View>
              )}
              // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
              stickySectionHeadersEnabled={true}
              contentContainerStyle={{
                flexWrap: "wrap",
                width: width / 2.75,
                // margin: spacing.xxl,
                // paddingHorizontal: spacing.xxs,
                // alignItems: "center",
                // rowGap: 100
                // gap: 100,
                // columnGap: 100,
              }}
              itemContainerStyle={{ width: itemDimension, height: itemHeight }}
              // maxItemsPerRow={isHugeScreen ? 5 : isBigScreen ? 2 : 1}
              maxItemsPerRow={4}
              sections={transformDataForSectionList(items).slice(2, 3)}
              renderItem={({ item }) => (
                <MenuItemSmall
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              )}
              renderSectionHeader={renderSectionTitle}
            />
            <SectionGrid
              renderSectionFooter={() => (
                <View style={{ height: spacing.xl }}></View>
              )}
              // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
              stickySectionHeadersEnabled={true}
              contentContainerStyle={
                {
                  // marginLeft: -spacing.lg,
                  // flexWrap: "wrap",
                  // margin: spacing.xxl,
                  // paddingHorizontal: spacing.xxs,
                  // alignItems: "center",
                  // rowGap: 100
                  // gap: 100,
                  // columnGap: 100,
                  // height: width,
                }
              }
              itemContainerStyle={{ width: itemDimension, height: itemHeight }}
              // maxItemsPerRow={isHugeScreen ? 5 : isBigScreen ? 2 : 1}
              maxItemsPerRow={4}
              sections={transformDataForSectionList(items).slice(3, 4)}
              renderItem={({ item }) => (
                <MenuItemSmall
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              )}
              renderSectionHeader={renderSectionTitle}
            />
          </View>
        </View>
      )}
      {menuType === "simpleMenu" && (
        <SimpleMenu categories={transformDataForSectionList(items)} />
      )} */}
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
