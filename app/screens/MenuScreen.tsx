import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, ViewStyle, View } from "react-native"
import { AppStackScreenProps, MenuNavigatorParamList } from "app/navigators"
import {
  Footer,
  MenuHeader,
  MenuItem,
  MenuItemSmall,
  OrderButton,
  Screen,
  Text,
} from "app/components"

import { colors, spacing, typography } from "app/theme"
import { useMediaQuery } from "react-responsive"
import { RouteProp, useFocusEffect } from "@react-navigation/native"
import { Linking } from "react-native" // Import Linking module
import { useNavigation, useRoute } from "@react-navigation/native"
import { imageCDNURL } from "app/utils/linkbuilder"
// import Config from "../config"
import { transformData, transformDataForSectionList } from "app/models/ItemStore"
// import { useStores } from "app/models"
import { Schema } from "amplify/data/resource"
import { generateClient } from "aws-amplify/api"
import { translate } from "../../app/i18n"
import { SectionGrid } from "react-native-super-grid"
import { Amplify } from "aws-amplify"
import { record } from "aws-amplify/analytics"
import outputs from "../../amplify_outputs.json"
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
})

const width = Dimensions.get("window").width
const sweetgreenMenu = require("menu-es.json")

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  const route = useRoute<RouteProp<MenuNavigatorParamList, "Menu">>()

  const { showHeader, menuType } = route?.params
  // route.params.menuType
  const showHeaderBool = showHeader === "true"

  const [items, setItems] = useState(
    sweetgreenMenu.filter((item: { hidden: boolean }) => item.hidden !== true),
  )

  // const client = generateClient<Schema>()
  // const [visible, setVisible] = React.useState(false)
  // const [isSyncedLocal, setIsSyncedLocal] = useState(false)
  // const showDialog = () => setVisible(true)

  // const hideDialog = () => setVisible(false)

  const navigation = useNavigation()
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" })
  console.log("is big screen", isBigScreen)
  // console.log(" ", imageCDNURL("menu/Hot_Honey_Chicken.png"))
  // console.log(" ", imageCDNURL("VerdeDulce_logo_with_border.png"))
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
  //       setIsSyncedLocal(isSynced)
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
                // return
                // const phoneNumber = "+593963021783" // Replace with the actual phone number

                record({
                  name: "orderNow",
                })
                // const message = translate("menuScreen.orderMessage") // Replace with the actual message
                const url = "https://wa.me/c/593963021783"
                await Linking.openURL(url).catch((err) =>
                  console.error("Failed to open WhatsApp", err),
                )
              }}
            />
          )
        },
      })
    }, [navigation]),
  )

  const renderSectionTitle = ({ section }: { section: any }) => {
    return (
      <View style={{ width: width, paddingLeft: spacing.sm }}>
        <Text
          style={{ fontFamily: typography.fonts.poppins.normal, fontSize: 36 }}
          preset="subheading"
        >
          {section.title.toUpperCase()}
        </Text>
      </View>
    )
  }

  return (
    <Screen style={$root} preset="scroll">
      {showHeaderBool && <MenuHeader />}
      {menuType === "homepage" && (
        <SectionGrid
          renderSectionFooter={() => <View style={{ height: spacing.xl }}></View>}
          // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
          stickySectionHeadersEnabled={true}
          contentContainerStyle={{
            // margin: spacing.xxl,
            // paddingHorizontal: spacing.xxs,

            alignItems: "center",
          }}
          itemDimension={isSmallScreen ? 225 : 350}
          // itemContainerStyle={{ height: 200 }}
          maxItemsPerRow={isSmallScreen ? 1 : 3}
          sections={transformDataForSectionList(items)}
          renderItem={({ item }) => (
            <MenuItem
              item={item}
              // showDelete={true}
              onPress={async () => {
                record({
                  name: "orderNow",
                  attributes: { name: item.name },
                })

                // const phoneNumber = "+593963021783" // Replace with the actual phone number
                // console.log("item", item.itemURL)
                // const message = translate("menuScreen.orderMenuItemMessage", {
                //   item: item.name,
                // }) // Replace with the actual message
                // console.log("message", message)
                // const url = `whatsapp://send?text=${encodeURIComponent(
                //   message + " " + item.itemURL,
                // )}&phone=${encodeURIComponent(phoneNumber)}`
                const url = item.itemURL
                await Linking.openURL(url).catch((err) =>
                  console.error("Failed to open WhatsApp", err),
                )
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
      )}
      {menuType === "menu" && (
        <SectionGrid
          renderSectionFooter={() => <View style={{ height: spacing.xl }}></View>}
          // ListHeaderComponentStyle={{ marginTop: 0, marginBottom: 0 }}
          stickySectionHeadersEnabled={true}
          contentContainerStyle={
            {
              // margin: spacing.xxl,
              // paddingHorizontal: spacing.xxs,
              // alignItems: "center",
            }
          }
          itemDimension={isBigScreen ? 225 : 350}
          // itemContainerStyle={{ height: 500 }}
          // itemContainerStyle={{ height: 200 }}
          maxItemsPerRow={isBigScreen ? 2 : 1}
          sections={transformDataForSectionList(items)}
          renderItem={({ item }) => (
            <MenuItemSmall name={item.name} price={item.price} description={item.description} />
          )}
          renderSectionHeader={renderSectionTitle}
        />
      )}
      <Footer
        onPressQr={() => {
          console.log("onPressQR")
          navigation.navigate("Qr")
        }}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  // borderWidth: 3,
  // borderColor: "pink",
  backgroundColor: colors.palette.lightBackground,
}
