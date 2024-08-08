import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, SectionList } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { MenuHeader, MenuItem, Screen, Text } from "app/components"
import { FlashList as FlatList } from "@shopify/flash-list"
import { colors, spacing } from "app/theme"
import { useMediaQuery } from "react-responsive"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface MenuScreenProps extends AppStackScreenProps<"Menu"> {}

export const MenuScreen: FC<MenuScreenProps> = observer(function MenuScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // })
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" })
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })
  // const numberOfColumns = breakpointGroup === "group1"
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  // 490 // 800
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2
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
