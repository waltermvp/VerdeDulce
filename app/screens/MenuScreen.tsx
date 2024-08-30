import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Footer, MenuHeader, MenuItem, OrderButton, Screen, Text } from "app/components"

import { colors, spacing } from "app/theme"
import { useMediaQuery } from "react-responsive"
import { useFocusEffect } from "@react-navigation/native"
import { Linking } from "react-native" // Import Linking module
import { useNavigation } from "@react-navigation/native"
import { imageCDNURL } from "app/utils/linkbuilder"
// import Config from "../config"
import { translate } from "app/i18n"
import { SectionGrid } from "react-native-super-grid"
import { transformData, transformDataForSectionList } from "app/models/ItemStore"
// import { useStores } from "app/models"
import { Schema } from "amplify/data/resource"
import { Dialog, Portal } from "react-native-paper"
import { generateClient } from "aws-amplify/api"

const width = Dimensions.get("window").width
const sweetgreenMenu = require("menu.json")
type Item = Schema["Item"]["type"]

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [items1, setItems] = useState<Item[]>(sweetgreenMenu)
  const client = generateClient<Schema>()
  const [visible, setVisible] = React.useState(false)
  const [isSyncedLocal, setIsSyncedLocal] = useState(false)
  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const navigation = useNavigation()
  // const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 430px)" })

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
              onPress={() => {
                // navigation.navigate("OrderNav", { screen: "Home" })
                // return
                const phoneNumber = "+593963021783" // Replace with the actual phone number

                const message = translate("menuScreen.orderMessage") // Replace with the actual message
                const url = `whatsapp://send?text=${encodeURIComponent(
                  message,
                )}&phone=${encodeURIComponent(phoneNumber)}`
                Linking.openURL(url).catch((err) => console.error("Failed to open WhatsApp", err))
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
        <Text preset="subheading">{section.title.toUpperCase()}</Text>
      </View>
    )
  }

  const renderMenuItem = ({ item }: { item: any }) => {
    return (
      <MenuItem
        item={item}
        // showDelete={true}
        onPress={() => {
          const phoneNumber = "+593963021783" // Replace with the actual phone number

          const message = translate("menuScreen.orderMenuItemMessage", { item: item.name }) // Replace with the actual message

          const url = `whatsapp://send?text=${encodeURIComponent(
            message,
          )}&phone=${encodeURIComponent(phoneNumber)}`
          Linking.openURL(url).catch((err) => console.error("Failed to open WhatsApp", err))
        }}
        onDelete={() => {
          // setItemIDToDelete(item.id)
          // showDialog()
        }}
      />
    )
  }
  return (
    <Screen style={$root} preset="scroll">
      <MenuHeader />
      {items1.length > 0 && (
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
          // itemContainerStyle={{ height: 500 }}
          // itemContainerStyle={{ height: 200 }}
          maxItemsPerRow={isSmallScreen ? 1 : 3}
          sections={transformDataForSectionList(items1)}
          renderItem={renderMenuItem}
          renderSectionHeader={renderSectionTitle}
        />
      )}
      <Footer />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  // borderWidth: 3,
  // borderColor: "pink",
  backgroundColor: colors.palette.lightBackground,
}
