import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { SectionList, ViewStyle, FlatList, View, Alert } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, CreateItem, MenuItem, OrderButton, Screen, Text } from "app/components"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { imageCDNURL } from "app/utils/linkbuilder"
import { useMediaQuery } from "react-responsive"
import { spacing } from "app/theme"
// import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { generateClient } from "aws-amplify/data"
import { Schema } from "amplify/data/resource"
import { Dialog, Portal } from "react-native-paper"
import { translate } from "app/i18n"

type Item = Schema["Item"]["type"]

interface AdminScreenProps extends AppStackScreenProps<"Admin"> {}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
//TODO: Add sort order to sections
type CreateItemInput = {
  name: string
  category: string
  description: string
  price: number
  calories: number
  url: string
}
export const AdminScreen: FC<AdminScreenProps> = observer(function AdminScreen() {
  const navigation = useNavigation()
  // const queryClient = new QueryClient()

  const {
    createItemStore: { createItemReady },
  } = useStores()

  const [data, setData] = useState<CreateItemInput | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const client = generateClient<Schema>()
  const [visible, setVisible] = React.useState(false)

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const createItemMutation = async () => {
    try {
      const createResult = await client.models.Item.create(
        {
          name: data?.name,

          category: data?.category,

          description: data?.description,
          price: data?.price,
          calories: data?.calories,
          // url: imageCDNURL("Q224_OLO_Carmelized_Garlic_Steak_Plate_3600x2400.png"),
        },
        { authMode: "userPool" },
      )
      hideDialog()
      console.log("createResult", createResult)
    } catch (error) {
      console.log("errorrr:", error)
      Alert.alert("Error", JSON.stringify(error, null, 2))
      hideDialog()
    }
  }

  useEffect(() => {
    // if (!displayID) {
    //   // setMode(MODE.MISSING_UDID)
    //   return
    // }

    const sub = client.models.Item.observeQuery({
      // filter: { displayId: { eq: displayID } },
      authMode: "apiKey",
    }).subscribe({
      next: ({ items, isSynced }) => {
        if (isSynced) {
          const transformed = transformData(items)
          console.log("transformed", transformed)
          setItems(transformed)

          // setSlideCount(items.length)
        }
      },
    })
    return () => {
      sub.unsubscribe()
    }
  }, [])

  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  // 490 // 800
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return <OrderButton tx="landingScreen.name" icon="add" onPress={showDialog} />
        },
      })
    }, [navigation]),
  )

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => fetch("https://api.github.com/repos/TanStack/query").then((res) => res.json()),
  // })

  // if (isPending) return "Loading..."

  // if (error) return "An error has occurred: " + error.message

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
        data={item.list}
        numColumns={numberOfColumns}
        renderItem={({ item }) => {
          return <MenuItem item={item} />
        }}
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
  console.log("createItemReady", createItemReady, "!!")
  console.log("items", items, "!!")

  return (
    <Screen style={$root} preset="scroll">
      <Text preset="heading" text="admin" />
      <View>
        <Portal>
          <CreateItemDialog
            visible={visible}
            hideDialog={hideDialog}
            enabled={!createItemReady}
            setData={setData}
            onCreate={createItemMutation}
          />
        </Portal>
      </View>

      <SectionList
        // contentContainerStyle={{ padding: spacing.sm }}
        // horizontal
        sections={items}
        renderItem={renderSection}
        renderSectionHeader={renderSectionTitle}
      ></SectionList>
    </Screen>
  )
})

// type CreateItemInput = {
//   name: string
//   category: string
//   description: string
//   price: number
//   calories: number
//   url: string
// }

const CreateItemDialog = ({
  visible,
  hideDialog,
  enabled,
  setData,
  onCreate,
}: {
  visible: boolean
  hideDialog: () => void
  enabled: boolean
  setData: (data: any) => void
  oncCreate: () => void
}) => {
  // const [ErrorBoundary]
  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>{translate("adminScreen.title")}</Dialog.Title>
      <Dialog.ScrollArea>
        <Text preset="default">{translate("adminScreen.subtitle")}</Text>
        <CreateItem setData={setData} />
      </Dialog.ScrollArea>

      <Dialog.Actions>
        <Button onPress={hideDialog}>{translate("common.cancel")}</Button>
        <Button
          preset={enabled ? "default" : "reversed"}
          disabled={enabled}
          disabledStyle={{ opacity: 0.06 }}
          onPress={onCreate}
        >
          {translate("adminScreen.title")}
        </Button>
      </Dialog.Actions>
    </Dialog>

    // <Dialog visible={visible} onDismiss={hideDialog}>
    //   <Dialog.Title>{translate("admin.createItem")}</Dialog.Title>
    //   <Dialog.Content>
    //     <CreateItem />
    //   </Dialog.Content>
    //   <Dialog.Actions>
    //     <Button onPress={hideDialog}>{translate("admin.done")}</Button>
    //   </Dialog.Actions>
    // </Dialog>
  )
}
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

const transformData = (data) => {
  console.log("data", data)
  // Group items by their category
  const groupedData = data.reduce((acc, item) => {
    console.log("item", item)
    console.log("item", item[0])
    const category = item.category.toLowerCase() // Assuming categories are distinct and well-defined
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push({
      id: item.id,
      name: item.name,
      description: item.description,
      price: `$${item.price.toFixed(2)}`,
      // url: imageCDNURL(item.url.split("/").pop()), // Extracting the filename from the URL for use in imageCDNURL
    })
    return acc
  }, {})
  console.log("groupedData", groupedData)
  // Transform the grouped data into the desired structure
  return Object.entries(groupedData).map(([key, list], index) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the category name
    key: key,
    data: [
      {
        key: key,
        list: list.map((item, idx) => ({
          ...item,
          id: (index * 100 + idx + 1).toString(), // Generating unique IDs for the list items
        })),
      },
    ],
  }))
}

// const DATA = transformData(originalData);
