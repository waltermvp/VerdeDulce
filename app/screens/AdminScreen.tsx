import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { SectionList, ViewStyle, FlatList, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, MenuItem, OrderButton, Screen, Text } from "app/components"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { Ionicons } from "@expo/vector-icons" // Import Ionicons from the appropriate library
import { imageCDNURL } from "app/utils/linkbuilder"
import { useMediaQuery } from "react-responsive"
import { spacing } from "app/theme"

interface AdminScreenProps extends AppStackScreenProps<"Admin"> {}

export const AdminScreen: FC<AdminScreenProps> = observer(function AdminScreen() {
  const navigation = useNavigation()
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  // 490 // 800
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2
  console.log("numberOfColumns", numberOfColumns)
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return <OrderButton tx="landingScreen.name" icon="add" />
        },
      })
    }, [navigation]),
  )

  const renderMenuItem = ({ item }) => {
    return <MenuItem item={item} />
  }
  const renderSection = ({ item }) => {
    return (
      <FlatList
        style={{
          alignSelf: "center",
          width: "100%",
          // alignItems: "center",
          // justifyContent: "space-evenly",
        }}
        columnWrapperStyle={{
          // gap: spacing.xxl * 6,
          // flex: 1,
          justifyContent: "space-between",
        }}
        contentContainerStyle={
          {
            // flexGrow: 1,
            // alignItems: "center",
            // backgroundColor: "red",
            // alignItems: "center",
            // justifyContent: "center",
            // flex: 1,
          }
        }
        // horizontal
        data={item.list}
        numColumns={numberOfColumns}
        renderItem={renderMenuItem}
        keyExtractor={keyExtractor}
        // extraData={numberOfColumns}
        key={numberOfColumns}
      />
      // </View>
    )
  }
  const renderSectionTitle = ({ section }) => {
    return <Text preset="heading">{JSON.stringify(section.title)}</Text>
  }
  const keyExtractor = (item) => {
    return item.name
  }

  if (!isAuthenticated) {
    return (
      <Screen style={$root} preset="scroll">
        <Text text="admin" />
        <Button
          text="Go to Menu"
          onPress={() => {
            navigation.navigate("Login")
          }}
        />
      </Screen>
    )
  }
  return (
    <Screen style={$root} preset="scroll">
      <Text preset="heading" text="admin" />

      <SectionList
        // contentContainerStyle={{ padding: spacing.sm }}
        // horizontal
        sections={DATA}
        renderItem={renderSection}
        renderSectionHeader={renderSectionTitle}
      ></SectionList>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
}

const DATA = [
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
          {
            id: "4",
            name: "Spicy Thai Salad",
            description: "Organic arugula, spicy cashew dressing, and sesame tofu",
            price: "$11.99",
            url: imageCDNURL("Q224_OLO_Carmelized_Garlic_Steak_Plate_3600x2400.png"),
          },
          {
            id: "5",
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