import React, { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Dimensions, ViewStyle, View } from "react-native";
import {
  Footer,
  MenuHeader,
  MenuItem,
  MenuItemSmall,
  OrderButton,
  Screen,
  SimpleMenu,
  Text,
} from "../../components";

import { colors, spacing, typography } from "../theme";
import { useMediaQuery } from "react-responsive";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { Linking } from "react-native"; // Import Linking module
import { useNavigation, useRoute } from "@react-navigation/native";
import { imageCDNURL } from "../utils/linkbuilder";
// import Config from "../config"
import {
  // transformData,
  transformDataForSectionList,
} from "../models/ItemStore";
// import { useStores } from "app/models"
// import { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/api";
import { translate } from "../i18n";
import { SectionGrid } from "react-native-super-grid";
import { Amplify } from "aws-amplify";
import { record } from "aws-amplify/analytics";
import outputs from "../../amplify_outputs.json";
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

const width = Dimensions.get("window").width;
const sweetgreenMenu = require("../../menu-es.json");
const itemDimension = 555;
const itemHeight = 222;

//TODO: This menu needs to be able to add to cart!
export default observer(function MenuScreen() {
  const route = useRoute();

  const { showFooter, menuType } = route?.params;

  // const showHeader = route?.params?.showHeader;
  // const showFooter = route?.params?.showFooter;
  // const menuType = route?.params?.menuType;
  // route.params.menuType
  const showFooterBool = showFooter === "true";

  const [items, setItems] = useState(
    sweetgreenMenu.filter((item: { hidden: boolean }) => item.hidden !== true)
  );

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
  console.log("is big screen", isBigScreen);
  // console.log("is isSmallScreen", isSmallScreen);

  // console.log(" ", imageCDNURL("menu/Hot_Honey_Chicken.png"));
  console.log(" ", imageCDNURL("VerdeDulce_logo.png", "og"));
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
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <OrderButton
              tx="landingScreen.order"
              icon="logo-whatsapp"
              onPress={async () => {
                // navigation.navigate("OrderNav", { screen: "Home" })

                navigation.navigate("(tabs)", {
                  screen: "OrderScreen",
                  params: {
                    showFooter: "true",
                    showHeader: "true",
                    menuType: "menu",
                  },
                });
                // return
                // const phoneNumber = "+593963021783" // Replace with the actual phone number

                // record({
                //   name: "orderNow",
                // });
                // // const message = translate("menuScreen.orderMessage") // Replace with the actual message
                // const url = "https://wa.me/c/593963021783";
                // await Linking.openURL(url).catch((err) =>
                //   console.error("Failed to open WhatsApp", err)
                // );
              }}
            />
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
      />
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
      {showFooterBool && (
        <Footer
          onPressQr={() => {
            console.log("onPressQR");
            navigation.navigate("Qr");
          }}
        />
      )}
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
