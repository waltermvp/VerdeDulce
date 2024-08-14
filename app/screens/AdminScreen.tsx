import React, { FC, useEffect, useLayoutEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { SectionList, ViewStyle, FlatList, View, Alert, Dimensions } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Button,
  CreateItem,
  MenuItem,
  OrderButton,
  PlaceholderMenu,
  Screen,
  Text,
} from "app/components"
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
  const [itemIDToDelete, setItemIDToDelete] = React.useState<string | null>(null)
  const isBigScreen = useMediaQuery({ query: "(min-width: 769px)" })
  const isSmallScreen = useMediaQuery({ query: "(max-width: 479px)" })
  const numberOfColumns = isSmallScreen ? 1 : isBigScreen ? 3 : 2
  const [isSyncedLocal, setIsSyncedLocal] = useState(false)
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
          url: data.url ? imageCDNURL(data?.url) : undefined,
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
  const deleteItemMutation = async (id: string) => {
    try {
      await client.models.Item.delete(
        {
          id,
        },
        { authMode: "userPool" },
      )
      hideDialog()
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
        setIsSyncedLocal(isSynced)
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

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => {
          return <OrderButton tx="landingScreen.name" icon="add" onPress={showDialog} />
        },
      })
    }, [navigation]),
  )
  useLayoutEffect(() => {
    navigation.setOptions({
      ti: () => {
        return <OrderButton tx="landingScreen.name" icon="add" onPress={showDialog} />
      },
    })
  }, [navigation])
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
        }}
        columnWrapperStyle={
          numberOfColumns !== 1 && {
            // gap: spacing.xxl * 6,
            // flex: 1,
            justifyContent: "space-between",
          }
        }
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
          console.log("item", item)
          return (
            <MenuItem
              item={item}
              showDelete={true}
              onDelete={() => {
                setItemIDToDelete(item.id)
                showDialog()
              }}
            />
          )
        }}
        keyExtractor={keyExtractor}
        extraData={numberOfColumns}
        key={numberOfColumns}
      />
      // </View>
    )
  }
  const renderSectionTitle = ({ section }) => {
    return <Text preset="heading">{section.title}</Text>
  }
  const keyExtractor = (item) => {
    return item.name
  }
  if (!isSyncedLocal) {
    return (
      <Screen style={$root} preset="scroll">
        <PlaceholderMenu />
      </Screen>
    )
  }

  if (!isAuthenticated) {
    return (
      <Screen style={$root} preset="scroll">
        <Button
          text="Login"
          onPress={() => {
            navigation.navigate("Login")
          }}
        />
      </Screen>
    )
  }

  console.log("createItemReady", createItemReady, "!!")

  return (
    <Screen style={$root} preset="scroll">
      <View>
        <Portal>
          {/* <CreateItemDialog
            visible={visible}
            hideDialog={hideDialog}
            enabled={!createItemReady}
            setData={setData}
            onCreate={createItemMutation}
          /> */}
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>
              {!itemIDToDelete
                ? translate("adminScreen.title")
                : translate("adminScreen.titleDelete")}
            </Dialog.Title>
            <Dialog.ScrollArea>
              <Text preset="default">
                {!itemIDToDelete
                  ? translate("adminScreen.subtitle")
                  : translate("adminScreen.subtitleDelete")}
              </Text>
              {!itemIDToDelete && <CreateItem setData={setData} />}
            </Dialog.ScrollArea>

            <Dialog.Actions>
              <Button onPress={hideDialog}>{translate("common.cancel")}</Button>
              <Button
                disabled={!itemIDToDelete ? !createItemReady : false}
                disabledStyle={{ opacity: 0.06 }}
                onPress={
                  !itemIDToDelete
                    ? createItemMutation
                    : () => {
                        if (itemIDToDelete) {
                          deleteItemMutation(itemIDToDelete)
                        }
                      }
                }
              >
                {itemIDToDelete
                  ? translate("adminScreen.subtitleDelete")
                  : translate("adminScreen.title")}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>

      <SectionList
        contentContainerStyle={{ padding: spacing.sm, gap: 10 }}
        // horizontal
        ListEmptyComponent={() => {
          return (
            <Text style={{ textAlign: "center" }} preset="heading">
              No items
            </Text>
          )
        }}
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

const $root: ViewStyle = {
  flex: 1,
  padding: spacing.sm,
}

const transformData = (data) => {
  // Group items by their category
  const groupedData = data.reduce((acc, item) => {
    // console.log("item", item)
    // console.log("item", item[0])
    const category = item.category?.toLowerCase() // Assuming categories are distinct and well-defined
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push({
      id: item.id,
      name: item.name,
      description: item.description,
      price: `$${item.price?.toFixed(2)}`,
      url: item.url, //imageCDNURL(item.url.split("/").pop()), // Extracting the filename from the URL for use in imageCDNURL
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
          // id: (index * 100 + idx + 1).toString(), // Generating unique IDs for the list items
        })),
      },
    ],
  }))
}

// const DATA = transformData(originalData);
