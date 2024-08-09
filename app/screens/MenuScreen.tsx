import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, SectionList, Pressable } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MenuHeader, MenuItem, Screen, Text } from "app/components"
import { FlashList as FlatList } from "@shopify/flash-list"
import { colors, spacing } from "app/theme"
import { useMediaQuery } from "react-responsive"
import { useFocusEffect } from "@react-navigation/native"

import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

// import { useStores } from "app/models"

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const navigation = useNavigation()
  const [onHoverIn, setOnHoverIn] = React.useState(false)
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  // 490 // 800
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2

  const multiplier = numberOfColumns === 3 ? 1 : numberOfColumns === 2 ? 1 : 0.25

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Pressable
              style={{ marginRight: spacing.lg, flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                // navigation.navigate("Order")
              }}
              onHoverIn={() => {
                setOnHoverIn(true)
              }}
              onHoverOut={() => {
                setOnHoverIn(false)
              }}
            >
              {/* <Image
                style={{ height: 48 * multiplier, width: 207 * multiplier }}
                source={require("../../assets/images/WhatsAppButtonGreenLarge.svg")}
              /> */}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.palette.lightGreen,
                  padding: spacing.sm,
                  borderRadius: 13,
                  borderBottomColor: colors.palette.veryDarkGreen,
                  borderBottomWidth: onHoverIn ? 2 : 0,
                }}
              >
                <Text tx="landingScreen.order" preset="bold"></Text>
                <Ionicons
                  style={{
                    // textDecorationLine: onHoverIn ? "underline" : undefined,
                    paddingLeft: spacing.sm,
                  }}
                  name="logo-whatsapp"
                  size={24}
                  // color="green"
                />
              </View>
            </Pressable>
          )
        },
      })
    }, [navigation, onHoverIn]),
  )
  // Pull in navigation via hook
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // })
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" })
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })
  // const numberOfColumns = breakpointGroup === "group1"
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
          },
          {
            id: "2",
            name: "Harvest Bowl",
            description: "Roasted brussels sprouts, roasted sweet potatoes, and wild rice",
            price: "$10.99",
          },
          {
            id: "3",
            name: "Spicy Thai Salad",
            description: "Organic arugula, spicy cashew dressing, and sesame tofu",
            price: "$11.99",
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
          },
          {
            id: "2",
            name: "Harvest Bowl",
            description: "Roasted brussels sprouts, roasted sweet potatoes, and wild rice",
            price: "$10.99",
          },
          {
            id: "3",
            name: "Spicy Thai Salad",
            description: "Organic arugula, spicy cashew dressing, and sesame tofu",
            price: "$11.99",
          },
        ],
      },
    ],
  },
]
