import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, SectionList } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MenuHeader, MenuItem, OrderButton, Screen, Text } from "app/components"
import { FlashList as FlatList } from "@shopify/flash-list"
import { colors, spacing } from "app/theme"
import { useMediaQuery } from "react-responsive"
import { useFocusEffect } from "@react-navigation/native"
import { Linking } from "react-native" // Import Linking module
import { useNavigation } from "@react-navigation/native"
import { imageCDNURL } from "app/utils/linkbuilder"
// import Config from "../config"
import { translate } from "app/i18n"

// import { useStores } from "app/models"

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const navigation = useNavigation()
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  // 490 // 800
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2
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
                // navigation.navigate("OrderScreen", { screen: "Order" })
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

  const renderSection = ({ item }) => {
    return (
      <FlatList
        data={item.list}
        numColumns={numberOfColumns}
        renderItem={renderMenuItem}
        keyExtractor={keyExtractor}
      />
    )
  }

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={{ margin: 0 }}>
        <Text preset="subheading">{section.title}</Text>
      </View>
    )
  }

  const renderMenuItem = ({ item }) => {
    return <MenuItem item={item} />
  }

  const keyExtractor = (item) => {
    return item.name
  }

  return (
    <Screen style={$root} preset="scroll">
      {/* <FlashList
        ListHeaderComponent={MenuHeader}
        data={DATA}
        numColumns={2}
        renderItem={renderMenuItem}
      /> */}
      <MenuHeader />
      <SectionList
        // ListHeaderComponent={MenuHeader}
        contentContainerStyle={{ padding: spacing.sm, justifyContent: "flex-start" }}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.lightBackground,
  paddingHorizontal: spacing.lg,
}

//TODO: tranform code needs to be written
const sections = [
  {
    title: "Vegetables",
    key: "vegetables",
    data: [
      {
        key: "vegetables",
        list: [
          {
            id: "1",
            name: "Kale Caesar",
            description: "Organic baby kale, shaved parmesan, and house-made caesar dressing",
            price: "$9.99",
            url: imageCDNURL("Q224_OLO_Carmelized_Garlic_Steak_Plate_3600x2400.png"),
          },
          {
            id: "2",
            name: "Harvest Bowl",
            description: "Roasted brussels sprouts, roasted sweet potatoes, and wild rice",
            price: "$10.99",
            url: imageCDNURL("Q423_OLO_HarvestBowlsAlmonda_3600x2400_1_zsngyb.png"),
          },
          {
            id: "3",
            name: "Spicy Thai Salad",
            description: "Organic arugula, spicy cashew dressing, and sesame tofu",
            price: "$11.99",
            url: imageCDNURL("Q224_OLO_Carmelized_Garlic_Steak_Plate_3600x2400.png"),
          },
        ],
      },
    ],
  },
  {
    title: "Fruits",
    key: "fruits",
    data: [
      {
        key: "fruits",
        list: [
          {
            id: "1",
            name: "Kale Caesar",
            description: "Organic baby kale, shaved parmesan, and house-made caesar dressing",
            price: "$9.99",
            url: imageCDNURL("Q423_OLO_HarvestBowlsAlmonda_3600x2400_1_zsngyb.png"),
          },
          {
            id: "2",
            name: "Harvest Bowl",
            description: "Roasted brussels sprouts, roasted sweet potatoes, and wild rice",
            price: "$10.99",
            url: imageCDNURL("Q224_OLO_Carmelized_Garlic_Steak_Plate_3600x2400.png"),
          },
          {
            id: "3",
            name: "Spicy Thai Salad",
            description: "Organic arugula, spicy cashew dressing, and sesame tofu",
            price: "$11.99",
            url: imageCDNURL("Q423_OLO_HarvestBowlsAlmonda_3600x2400_1_zsngyb.png"),
          },
        ],
      },
    ],
  },
]
